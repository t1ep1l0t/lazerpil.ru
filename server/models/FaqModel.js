import mongoose from "mongoose";

const FaqModel = new mongoose.Schema({
    question: {type: String, require: true, unique: true},
    answer: [{type: String, require: true}]
});

export default mongoose.model('FaqModel', FaqModel);