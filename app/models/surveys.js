/*Web App Name: Take The Survey
File Name: surverys.js;
Group Name: Team A+;
Date: November 26, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const surveySchema = new Schema({
    surveyName : String,
    surveyDescription : String,
    surveyCreationDate : Date,
    surveyExpiryDate : Date,
    questionType: String,
    questionTypeOne: String,
},{
    timestamps: true,
    collection:'surveys'
});

export default mongoose.model('Survey', surveySchema);

// testing new prototype scheema format.
// we create two question type scheemas. one for options and one for short answers. 
//The survery schema take an array type to store multiple questions of any type.
/* 
const optionsQuestion = new Schema({
    question : String,
    choice1 : String,
    choice2 : String,
    choice3 : String,
    choice4 : String
})

const questionScheema = new Schema({
    question : String,
    Answers : String
})

//im using the above two models as variables here.
const surveySchemaFinal = new Schema({
    surveyName : String,
    surveyDescription : String,
    surveyCreationDate : Date,
    surveyExpiryDate : Date,
    
    questions: [{optionsQuestion, questionScheema}]
},{
    timestamps: true,
    collection:'surveys'
}); */