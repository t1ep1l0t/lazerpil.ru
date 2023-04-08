import Router from "express";
import AdminController from "../controllers/AdminController.js";

const admin_router = new Router ();

admin_router.post('/register', AdminController.register);
admin_router.post('/login', AdminController.login);

export default admin_router;