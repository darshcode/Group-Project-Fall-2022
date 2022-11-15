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

// Index Controller
//this section exports the function needed to render pages during click events. 
//these function are used by: 
                            //routes --> index.route.server.js

export function displayHomePage(req, res, next){
    res.render('index', { title: 'Home', page: 'home' });
};

export function displayAboutPage(req, res, next) {
    res.render('index', {title: 'About', page: 'about'});
}

export function displayContactPage(req, res, next) {
    res.render('index', {title: 'Contact', page: 'contact'});
}

export function displayProjectsPage(req, res, next) {
    res.render('index', {title: 'Projects', page: 'projects'});
}

export function displayServicesPage(req, res, next) {
    res.render('index', {title: 'Services', page: 'services'});
}
