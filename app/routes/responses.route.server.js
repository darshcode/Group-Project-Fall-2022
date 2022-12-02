/*Web App Name: Take The Survey
File Name: responses.route.server.js;
Group Name: Team A+;
Date: December 1st, 2022
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

//add middleware
router.get('/responses-list/:id', DisplayResponsesList);
router.get('/responses-add/:id', AuthGuard, DisplayREsponsessAddPage);
router.post('/responses-add/:id', AuthGuard, ProcessResponsesAddPage);


//this router is now exportable and can be used.
export default router;
