import mongoose from "mongoose";

const review_router = new mongoose.Schema({
    author: {type: String, require: true},
    review: {type: String, require: false},
    count: {type: Number, require: true},
    path: {type: String, require: false},
    date: {type: String, default: true}
});

export default mongoose.model('review_router', review_router);