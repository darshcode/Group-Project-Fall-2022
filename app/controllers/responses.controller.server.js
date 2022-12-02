/*Web App Name: Take The Survey
File Name: responses.controller.server.js;
Group Name: Team A+;
Date: November 10, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/

import questionModel from '../models/questions.js';
import surveyModel from '../models/surveys.js';
import responsesModel from '../models/responses.js';


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

export function DisplayResponsesAddPage(req, res, next){
    res.render('index', { title: 'Add Response', page: 'response/edit', survey : {} ,response: {}, displayName: UserDisplayName(req) });
}

export function ProcessReponsesAddPage(req, res, next){
    
    let newResponse = responseModel({
        responseDescription : req.body.responseDescription,
        
        
    });

    responseModel.create(newResponse, (err, Response) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect("/response-list/:id")
    } )
}
