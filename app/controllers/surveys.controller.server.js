/*Web App Name: Take The Survey
File Name: surveys.controller.server.js;
Group Name: Team A+;
Date: November 10, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         3012453494*/

import surveyModel from '../models/surveys.js';

export function DisplaySurveysList(req, res, next){
    surveyModel.find(function(err, surveysCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Survey List', page: 'surveys/list', surveys: surveysCollection});
    })
}

export function DisplaySurveysAddPage(req, res, next){
    res.render('index', { title: 'Add Survey', page: 'surveys/edit', survey: {} });
}

export function ProcessSurveysAddPage(req, res, next){
    
    let newSurvey = surveyModel({
        surveyName: req.body.surveyName,
        surveyDescription : req.body.surveyDescription
        
    });

    surveyModel.create(newSurvey, (err, Survey) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/survey-list')
    } )
}

export function DisplaySurveysEditPage(req, res, next){
    let id = req.params.id;

    surveyModel.findById(id, (err, survey) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Survey', page: 'surveys/edit', survey: survey });
    });    
}

export function ProcessSurveysEditPage(req, res, next){

    let id = req.params.id;
    
    let newSurvey = surveyModel({
        _id: req.body.id,
        surveyName: req.body.surveyName,
        surveyDescription : req.body.surveyDescription
    });

    surveyModel.updateOne({_id: id }, newSurvey, (err, Survey) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/survey-list')
    } )
}

export function ProcessSurveysDelete(req, res, next){
    let id = req.params.id;

    surveyModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/survey-list');
    })
}
