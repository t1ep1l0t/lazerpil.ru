import Router from "express";
import FaqController from "../controllers/FaqController.js";

const faq_router = new Router();

faq_router.post('/add', FaqController.add_faq);
faq_router.get('/get', FaqController.get_all_faqs);
faq_router.put('/update/:id', FaqController.update_faq);
faq_router.delete('/delete', FaqController.delete_all_faqs);
faq_router.delete('/delete/:id', FaqController.delete_faq);

export default faq_router;