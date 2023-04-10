import mongoose from "mongoose";

const GalleryModel = new mongoose.Schema({
    picture: {type: String, require: true}
});

export default mongoose.model('GalleryModel', GalleryModel);