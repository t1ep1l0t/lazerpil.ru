import Router from "express";
import GalleryController from "../controllers/GalleryController.js";

const gallery_router = new Router();

gallery_router.post('/add', GalleryController.add);
gallery_router.get('/get', GalleryController.get);
gallery_router.delete('/delete', GalleryController.delete__all);
gallery_router.delete('/delete/:id', GalleryController.delete__one);
export default gallery_router;