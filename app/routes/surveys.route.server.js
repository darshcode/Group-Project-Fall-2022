import { Router } from "express";

import {  DisplaySurveysList, 
    DisplaySurveysAddPage, 
    ProcessSurveysAddPage, 
    ProcessSurveysEditPage, 
    DisplaySurveysEditPage, 
    ProcessSurveysDelete } from "../controllers/surveys.controller.server.js";

const router = Router();

router.get('/survey-list', DisplaySurveysList);
router.get('/survey-add', DisplaySurveysAddPage);
router.post('/survey-add', ProcessSurveysAddPage);
router.post('/survey-edit/:id', ProcessSurveysEditPage);
router.get('/survey-edit/:id', DisplaySurveysEditPage);
router.get('/survey-delete/:id', ProcessSurveysDelete);

export default router;