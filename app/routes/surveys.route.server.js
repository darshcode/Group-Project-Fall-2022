/*Web App Name: Take The Survey
File Name: surveys.route.server.js;
Group Name: Team A+;
Date: November 10, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         3012453494*/


//Index Routes
//importing router from express.
import { Router } from "express";

//Importing functinos from 'index.controller.server' from controllers.
import {  DisplaySurveysList, 
    DisplaySurveysAddPage, 
    ProcessSurveysAddPage, 
    ProcessSurveysEditPage, 
    DisplaySurveysEditPage, 
    ProcessSurveysDelete } from "../controllers/surveys.controller.server.js";

    // Intanciating the router from the imported package above
const router = Router();


// add middleware to connect application
//Should learn more about router instance.
//the part after the router is the VERB: POST, GET, PUT, DELETE, PATCH.
//the first part after get is the route followed by function.
router.get('/survey-list', DisplaySurveysList);
router.get('/survey-add', DisplaySurveysAddPage);
router.post('/survey-add', ProcessSurveysAddPage);
router.post('/survey-edit/:id', ProcessSurveysEditPage);
router.get('/survey-edit/:id', DisplaySurveysEditPage);
router.get('/survey-delete/:id', ProcessSurveysDelete);

//this router is now exportable and can be used.
export default router;
