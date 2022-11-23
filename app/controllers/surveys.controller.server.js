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
Wilson Wu         301243494*/

import surveyModel from '../models/surveys.js';

// import DisplayName Utility method
import { UserDisplayName } from '../utils/index.js';

// Index Controller
//this section exports the function needed to render pages during click events. 
//these function are used by:       routes --> index.Route.server.js
//this code is related to views
//the res part of res.render mean response.  the render method renders the index file under index.ejs 
//and uses {title and pages under components.} so we have two parameters.. 
//also notice that the part in {curly braces is in jason format}.
//finally notice the page: home. this is another variable were passing to index.ejs in the main article. by using this we can refer to the right page.

export function DisplaySurveysList(req, res, next){
    surveyModel.find(function(err, surveysCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Survey List', page: 'surveys/list', surveys: surveysCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplaySurveysAddPage(req, res, next){
    res.render('index', { title: 'Add Survey', page: 'surveys/edit', survey: {}, displayName: UserDisplayName(req) });
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

        res.render('index', { title: 'Edit Survey', page: 'surveys/edit', survey: survey, displayName: UserDisplayName(req) });
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
