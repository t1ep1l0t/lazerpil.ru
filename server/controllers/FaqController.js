import FaqModel from "../models/FaqModel.js";

class FaqController {
    async add_faq (req, res) {
        try {
            const { question, answer } = req.body;

            const check_question = await FaqModel.findOne({question: question});
            if(check_question) {
                return res.status(400).json({
                    message: 'Такой ворос уже существует, пожалуйста добавьте другой вопрос или оновите существующий.'
                })
            }

            const new_faq = await FaqModel.create({
                question: question,
                answer: answer
            });

            res.status(200).json(new_faq);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'На сервере произошла ошибка пожалуйста попробуйте позже.'
            })
        }
    }
    async get_all_faqs (req, res) {
        try {
            const faqs = await FaqModel.find();

            res.status(200).json(faqs);

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'На сервере произошла ошибка пожалуйста попробуйте позже.'
            })
        }
    }
    async update_faq (req, res) {
        try {
            const { question, answer } = req.body;
            const id = req.params.id;

            const check_faq = await FaqModel.findById(id);
            if(!check_faq) {
                return res.status(401).json({
                    message: 'Вопрос с таким id не найден.'
                })
            }

            const update_faq = await FaqModel.findByIdAndUpdate({_id: id}, {question: question, answer: answer}, {new: true});

            console.log(update_faq)

            res.status(201).json(update_faq);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'На сервере произошла ошибка пожалуйста попробуйте позже.'
            })
        }
    }
    async delete_all_faqs (req, res) {
        try {
            const deleted = await FaqModel.deleteMany({});

            res.status(200).json({
                message: 'Успешно удалены все вопросы.',
                deleted: deleted
            })

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'На сервере произошла ошибка пожалуйста попробуйте позже.'
            })
        }
    }
    async delete_faq (req, res) {
        try {
            const id = req.params.id;

            const deleted = await FaqModel.findByIdAndDelete(id);
            if(!deleted) {
                return res.status(401).json({
                    message: 'Вопрос с таким id не найден.',
                })
            }
            res.status(200).json(deleted);

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'На сервере произошла ошибка пожалуйста попробуйте позже.'
            })
        }
    }
}

export default new FaqController;