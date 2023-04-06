import Router from "express";
import popular_router from "./PopularRouter.js";
import faq_router from './FaqRouter.js'

const router = new Router();

router.use('/populars', popular_router);
router.use('/faqs', faq_router);


export default router;