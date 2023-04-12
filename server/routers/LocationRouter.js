import Router from "express";
import LocationController from "../controllers/LocationController.js";

const location_router = new Router ();

location_router.post('/add', LocationController.add_one);
location_router.get('/get', LocationController.get_all);
location_router.get('/get/:id', LocationController.get_one);
location_router.post('/update/:id', LocationController.update_one);
location_router.delete('/delete', LocationController.delete_all);
location_router.delete('/delete/:id', LocationController.delete_one);
export default location_router;