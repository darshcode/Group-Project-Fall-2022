/*Web App Name: Take The Survey
File Name: index.controller.server.js;
Group Name: Team A+;
Date: November 10, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         3012453494*/

// can be deleted?

// import DisplayName Utility method
import { UserDisplayName } from '../utils/index.js';

export function displayHomePage(req, res, next){
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req)});
};



//===============================================================
// Alex: I don't think we need following controller
//===============================================================

// export function displayAboutPage(req, res, next) {
//     res.render('index', {title: 'About', page: 'about', displayName: UserDisplayName(req)});
// }

// export function displayContactPage(req, res, next) {
//     res.render('index', {title: 'Contact', page: 'contact', displayName: UserDisplayName(req)});
// }

// export function displayProjectsPage(req, res, next) {
//     res.render('index', {title: 'Projects', page: 'projects', displayName: UserDisplayName(req)});
// }

// export function displayServicesPage(req, res, next) {
//     res.render('index', {title: 'Services', page: 'services', displayName: UserDisplayName(req)});
// }
