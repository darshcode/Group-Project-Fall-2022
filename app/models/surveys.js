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

const surveySchema = new Schema({
    surveyName : String,
    surveyDescription : String,
    questionType: String

    // Survey content is TBD

},{
    timestamps: true,
    collection:'surveys'
});

export default mongoose.model('Survey', surveySchema);
