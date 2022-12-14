/*Web App Name: Take The Survey
File Name: surveys.controller.server.js;
Group Name: Team A+;
Date: December 14, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/

import questionModel from '../models/shortScheema.js';
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

export function DisplayQuestionsList(req, res, next){
    questionModel.find(function(err, questionsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Question List', page: 'questions/list', questions: questionsCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayQuestionsAddPage(req, res, next){
    res.render('index', { title: 'Add Question', page: 'questions/edit', survey : {} ,question: {}, displayName: UserDisplayName(req) });
}

export function ProcessQuestionsAddPage(req, res, next){
    
    let newQuestion = questionModel({
        questionType: req.body.questionType,
        questionDescription : req.body.questionDescription,
    });

    questionModel.create(newQuestion, (err, Question) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect("/question-list/:id")
    } )
}

// export function DisplaySurveysEditPage(req, res, next){
//     let id = req.params.id;

//     surveyModel.findById(id, (err, survey) => {
//         if(err){
//             console.error(err);
//             res.end(err);
//         }

//         res.render('index', { title: 'Edit Survey', page: 'surveys/edit', survey: survey, displayName: UserDisplayName(req) });
//     });    
// }

// export function ProcessSurveysEditPage(req, res, next){

//     let id = req.params.id;
    
//     let newSurvey = surveyModel({
//         _id: req.body.id,
//         surveyName: req.body.surveyName,
//         surveyDescription : req.body.surveyDescription,
//         surveyCreationDate : req.body.surveyCreationDate,
//         surveyExpiryDate : req.body.surveyExpiryDate,
//         questionType: req.body.questionType,
//         questionTypeOne: req.body.questionTypeOne,
//         questionTypeTwo: req.body.questionTypeTwo
//     });

//     surveyModel.updateOne({_id: id }, newSurvey, (err, Survey) => {
//         if(err){
//             console.error(err);
//             res.end(err);
//         };

//         res.redirect('/survey-list')
//     } )
// }

// export function ProcessSurveysDelete(req, res, next){
//     let id = req.params.id;

//     surveyModel.remove({_id: id}, (err) => {
//         if (err){
//             console.error(err);
//             res.end(err);
//         }

//         res.redirect('/survey-list');
//     })
// }
