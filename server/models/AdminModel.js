import mongoose from "mongoose";

const AdminModel = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true},
});

export default mongoose.model('AdminModel', AdminModel);