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

// export function DisplayQuestionsEditPage(req, res, next){
//     let id = req.params.id;

//     questionModel.findById(id, (err, question) => {
//         if(err){
//             console.error(err);
//             res.end(err);
//         }

//         res.render('index', { title: 'Edit Question', page: 'questions/edit', question: question, displayName: UserDisplayName(req) });
//     });    
// }

// export function ProcessQuestionsEditPage(req, res, next){

//     let id = req.params.id;
    
//     let newQuestion = questionModel({
//         _id: req.body.id,
//         questionDescription : req.body.surveyDescription,

//         questionType: req.body.questionType,
//         questionTypeOne: req.body.questionTypeOne,
//         questionTypeTwo: req.body.questionTypeTwo
//     });

//     questionsModel.updateOne({_id: id }, newQuestion, (err, Question) => {
//         if(err){
//             console.error(err);
//             res.end(err);
//         };

//         res.redirect('/qustion-list')
//     } )
// }

// export function ProcessQuestionsDelete(req, res, next){
//     let id = req.params.id;

//     questionModel.remove({_id: id}, (err) => {
//         if (err){
//             console.error(err);
//             res.end(err);
//         }

//         res.redirect('/question-list');
//     })
// }
