/*Web App Name: Take The Survey
File Name: surveys.route.server.js;
Group Name: Team A+;
Date: December 14, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/


//Index Routes
//importing router from express.
import { Router } from "express";

//Importing functinos from 'index.controller.server' from controllers.
import {DisplayQuestionsList,
    DisplayQuestionsAddPage,
    ProcessQuestionsAddPage 
     } from "../controllers/questions.controller.server.js";
import { AuthGuard } from "../utils/index.js";

    // Intanciating the router from the imported package above
const router = Router();


// add middleware to connect application
//Should learn more about router instance.
//the part after the router is the VERB: POST, GET, PUT, DELETE, PATCH.
//the first part after get is the route followed by function.
router.get('/question-list/:id', DisplayQuestionsList);
router.get('/question-add/:id', AuthGuard, DisplayQuestionsAddPage);
router.post('/question-add/:id', AuthGuard, ProcessQuestionsAddPage);
// router.post('/survey-edit/:id', AuthGuard, ProcessSurveysEditPage);
// router.get('/survey-edit/:id', AuthGuard, DisplaySurveysEditPage);
// router.get('/survey-delete/:id', AuthGuard, ProcessSurveysDelete);

//this router is now exportable and can be used.
export default router;
