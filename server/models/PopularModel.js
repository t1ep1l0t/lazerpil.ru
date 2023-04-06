import mongoose from "mongoose";

const PopularModel = new mongoose.Schema({
    name: {type: String, require: true, unique: false},
    desc: {type: String, require: true},
    price: {type: String, require: false},
    picture: {type: String, require: true}
});

export default mongoose.model('PopularModel', PopularModel);