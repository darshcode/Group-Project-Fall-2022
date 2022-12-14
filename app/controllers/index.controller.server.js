/*Web App Name: Take The Survey
File Name: index.controller.server.js;
Group Name: Team A+;
Date: December 14, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/

// can be deleted?

// import DisplayName Utility method
import { UserDisplayName } from '../utils/index.js';

export function displayHomePage(req, res, next){
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req)});
};




