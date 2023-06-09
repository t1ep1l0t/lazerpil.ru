import Router from "express";
import popular_router from "./PopularRouter.js";
import faq_router from './FaqRouter.js'
import location_router from "./LocationRouter.js";
import review_router from "./ReviewRouter.js";
import admin_router from "./AdminRouter.js";
import complex_router from "./ComplexRouter.js";
import gallery_router from "./GalleryRouter.js";

const router = new Router();

router.use('/populars', popular_router);
router.use('/complex', complex_router);
router.use('/faqs', faq_router);
router.use('/locations', location_router);
router.use('/reviews', review_router);
router.use('/admin', admin_router);
router.use('/gallery', gallery_router);



export default router;