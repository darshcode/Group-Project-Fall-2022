/*Web App Name: Take The Survey
File Name: index.route.server.js;
Group Name: Team A+;
Date: November 10, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         3012453494*/

// Index Routes
//importing router from express and importing functinos from controller section.
import { Router } from 'express';
import { displayHomePage, 
    } from '../controllers/index.controller.server.js'

// Intanciating the router
const router = Router();

// add middleware to connect application
//the first part after get is the route followed by function.
router.get('/',displayHomePage);
router.get('/home',displayHomePage);


//===============================================================
// Alex: I don't think we need following controller
//===============================================================
// router.get('/about', displayAboutPage );
// router.get('/projects', displayProjectsPage );
// router.get('/services', displayServicesPage );
// router.get('/contact', displayContactPage );

export default router;
