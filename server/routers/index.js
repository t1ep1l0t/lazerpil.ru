import Router from "express";
import popular_router from "./PopularRouter.js";

const router = new Router();

router.use('/populars', popular_router);


export default router;