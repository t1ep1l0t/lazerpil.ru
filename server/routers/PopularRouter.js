import Router from "express";
import PopularController from "../controllers/PopularController.js";

const popular_router = new Router();

popular_router.post('/add', PopularController.add_new_popular);
popular_router.get('/get', PopularController.get_all_popular);
popular_router.delete('/delete', PopularController.delete_all_popular);
popular_router.delete('/delete/:id', PopularController.delete_one_popular);

export default popular_router;