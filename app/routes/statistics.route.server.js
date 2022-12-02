/*Web App Name: Take The Survey
File Name: statistics.route.server.js;
Group Name: Team A+;
Date: December 1st, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/


//Index Routes
//importing router from express.
import { Router } from "express";

//Importing functinos from 'index.controller.server' from controllers.
import {DisplayStatisticsList,
     } from "../controllers/statistics.controller.server.js";
import { AuthGuard } from "../utils/index.js";

    // Intanciating the router from the imported package above
const router = Router();


// add middleware to connect application
router.get('/statistics-list/:id', DisplayStatisticsList);


//this router is now exportable and can be used.
export default router;
