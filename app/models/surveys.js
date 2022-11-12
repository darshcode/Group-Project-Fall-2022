import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const surveySchema = new Schema({
    test : String
    // Survey content is TBD

},{
    timestamps: true,
    collection:'surveys'
});

export default mongoose.model('Survey', surveySchema);