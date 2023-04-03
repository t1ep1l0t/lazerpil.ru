import Router from "express";
import PopularController from "../controllers/PopularController.js";

const popular_router = new Router();

popular_router.post('/add-new', PopularController.add_new_popular);
popular_router.put('/update/:id', PopularController.update_popular);
popular_router.get('/get-all', PopularController.get_all_popular);
popular_router.get('/get-one/:id', PopularController.get_one_popular);
popular_router.delete('/delete-all', PopularController.delete_all_popular);
popular_router.delete('/delete-one/:id', PopularController.delete_one_popular);

export default popular_router;