import ReviewModel from "../models/ReviewModel.js";

class  ReviewController {
    async add_one (req, res) {
        try {
            const {author, review, count, path, date} = req.body;

            if(!author) {
                return res.status(400).json({
                    message: 'Ошибка, Автор не указан'
                })
            }
            if (!count) {
                return res.status(400).json({
                    message: 'Ошибка, Количество звезд не указано'
                })
            }

            const new_review = await ReviewModel.create({author, review, count, path, date});

            res.status(200).json(new_review);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже.'
            })
        }
    }
    async get_all (req, res) {
        try {
            const reviews = await ReviewModel.find();
            res.status(200).json(reviews);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже.'
            })
        }
    }
    async update (req, res) {
        try {
            const {author, review, count, date} = req.body;
            const id = req.params.id;

            const check_id = await ReviewModel.findById(id);
            if(!check_id) {
                return res.status(401).json({
                    message: 'Отзыв с таким id не найден'
                })
            }

            const update_review = await ReviewModel.findByIdAndUpdate(id, {author, review, count, date}, {new: true});

            res.status(201).json(update_review);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже.'
            })
        }
    }
    async delete_all (req, res) {
        try {
            const deleted = await ReviewModel.deleteMany({});

            res.status(200).json(deleted);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже.'
            })
        }
    }
    async delete_one (req, res) {
        try {
            const id = req.params.id;

            const check_id = await ReviewModel.findById(id);
            if(!check_id) {
                return res.status(401).json({
                    message: 'Отзыв с таким id не найден'
                })
            }

            const deleted = await ReviewModel.findByIdAndDelete(id);

            res.status(200).json(deleted);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже.'
            })
        }
    }
}
export default new ReviewController;