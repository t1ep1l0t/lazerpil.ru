import Router from 'express';
import ReviewController from "../controllers/ReviewController.js";

const review_router = new Router();

review_router.post('/add', ReviewController.add_one);
review_router.get('/get', ReviewController.get_all);
review_router.put('/update/:id', ReviewController.update);
review_router.delete('/delete/', ReviewController.delete_all);
review_router.delete('/delete/:id', ReviewController.delete_one);
export default review_router;