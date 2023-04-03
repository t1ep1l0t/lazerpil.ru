import Router from "express";
import GalleryController from "../controllers/GalleryController.js";

const gallery_router = new Router()

gallery_router.post('/add-photos', GalleryController.add_photos);
gallery_router.get('/get-photos', GalleryController.get_all_photos);
gallery_router.delete('/delete-all', GalleryController.delete_all_photos);
gallery_router.delete('/delete-one/:id', GalleryController.delete_one_photo);
export default gallery_router;