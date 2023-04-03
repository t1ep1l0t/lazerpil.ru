import Router from "express";
import popular_router from "./PopularRouter.js";
import gallery_router from "./GalleryRouter.js";

const router = new Router();

router.use('/populars', popular_router);
router.use('/gallery', gallery_router);


export default router;