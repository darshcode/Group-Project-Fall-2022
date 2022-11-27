/*Web App Name: Take The Survey
File Name: app.js;
Group Name: Team A+;
Date: November 26, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/

// Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname
//explanation: we imported path and dirname from core packages. we use them in conjunction to create a path for the constant __dirname. >>
//>>that we will use later
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Auth Step 1 -import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

//Auth Step 2 - define auth strategy
let localStrategy = passportLocal.Strategy;

//Auth Step 3 - import the user model
import User from './models/user.js';

//Import Mongoose Module, we are importing mongoose module so we can connect to our databse.
import mongoose from 'mongoose';


// Configuration Module
import { MongoURI, Secret } from "../config/config.js";

// Import Router
import indexRouter from './routes/index.route.server.js';

// Import Router from index.route.server.js
import surveyRouter from './routes/surveys.route.server.js';

//Import Auth router
import authRouther from './routes/auth.route.server.js';


// instantiate app-server
const app = express();


//Complete the DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//Listen for connection success or error
db.on('open', () => console.log('Connected to MongoDB'));
db.on('error', () => console.log('Mongo Connection Error'));


// setup ViewEngine EJS
//We are setting our application's views and current directory where our app will look for ceratain stuff
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'))); // all files uploaded to the browser when loading to be used in app.

//Auth Step 4 - Setup Express Session
app.use(session({
    secret: Secret, //if we dont include a secret, the public has access to some of our data that we dont want them to be able to see. thats why we use a secret'/ encryption.
    saveUninitialized: false,   //disables saving data when realoading.
    resave: false
}));

//Auth Step 5 - Setup Flash
app.use(flash());

//Auth Step 6 - Initialize Passport and Session
app.use(passport.initialize());
app.use(passport.session());

//Auth Step 7 - implement Auth strategy
passport.use(User.createStrategy());

// Use Routes
app.use('/', indexRouter);
app.use('/', surveyRouter);
app.use('/',authRouther);

//Auth Step 8 - Setup serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// run app
// app.listen(3000);

// console.log('Server running at http://localhost:3000');

export default app;
