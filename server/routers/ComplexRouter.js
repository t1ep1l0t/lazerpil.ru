import Router from "express";
import ComplexController from "../controllers/ComplexController.js";

const complex_router = new Router();

complex_router.post('/add', ComplexController.add_new_complex);
complex_router.get('/get', ComplexController.get_all_complex);
complex_router.delete('/delete', ComplexController.delete_all_complex);
complex_router.delete('/delete/:id', ComplexController.delete_one_complex);

export default complex_router;