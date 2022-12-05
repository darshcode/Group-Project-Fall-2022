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



// testing new prototype scheema format.
// we create two question type scheemas. one for options and one for short answers. 
//The survery schema take an array type to store multiple questions of any type.

const optionsQuestion = new Schema({
    questionOpt : String,
    choice1 : String,
    choice2 : String,
    choice3 : String,
    choice4 : String
});

const shortQuestions = new Schema({
    questionShort : String,
    Answers : String
});

export default mongoose.model('Question', questionSchema);


