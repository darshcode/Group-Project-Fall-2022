/*Web App Name: Take The Survey
File Name: index.controller.server.js;
Group Name: Team A+;
Date: November 26, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/

import { Router } from "express";
import { DisplayLoginPage, 
    DisplayRegisterPage, 
    ProcessLoginPage,
    ProcessLogoutPage,
    ProcessRegisterPage} 
    from "../controllers/auth.controller.server.js";

const router = Router();

// Display Login Router
router.get('/login', DisplayLoginPage);
// Process Login Page
router.post('/login', ProcessLoginPage);


// Display Register Router
router.get('/register', DisplayRegisterPage);
// Process Registration Page
router.post('/register', ProcessRegisterPage);

// Process lougout 
router.get('/logout', ProcessLogoutPage);


export default router;
