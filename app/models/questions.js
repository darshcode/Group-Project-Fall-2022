/*Web App Name: Take The Survey
File Name: surverys.js;
Group Name: Team A+;
Date: November 10, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    questionType : String,
    questionDescription : String,
    //***To add as per prof ---> surveyID : String



},{
    timestamps: true,
    collection:'questions'
});

export default mongoose.model('Question', questionSchema);
