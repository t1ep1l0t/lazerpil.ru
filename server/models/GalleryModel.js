import mongoose from "mongoose";

const GalleryModel = new mongoose.Schema({
    name: {type: String, unique: true, require: true}
});

export default mongoose.model('GalleryModel', GalleryModel);