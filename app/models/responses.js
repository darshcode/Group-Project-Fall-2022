/*Web App Name: Take The Survey
File Name: responses.js;
Group Name: Team A+;
Date: December 1st, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         301243494*/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const responseSchema = new Schema({
    responseDescription

    // Survey content is TBD

},{
    timestamps: true,
    collection:'responses'
});

export default mongoose.model('Response', responseSchema);
