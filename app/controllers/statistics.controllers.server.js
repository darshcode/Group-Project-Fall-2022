/*Web App Name: Take The Survey
File Name: statistics.controller.server.js;
Group Name: Team A+;
Date: December 1st, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/

import responsesModel from '../models/responsess.js';
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

export function DisplayStatisticsList(req, res, next){
    statisticsModel.find(function(err, statisticsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Statistics List', page: 'statistics/list', statistics: statisticsCollection, displayName: UserDisplayName(req)});
    })
}
