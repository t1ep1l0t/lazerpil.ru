import PopularModel from "../models/PopularModel.js";
import PopularFileService from "../services/PopularFileService.js";

class PopularController {

    async add_new_popular (req, res) {
        try {
            const { name, desc, price } = req.body;

            const file = req.files?.picture;

            if(!file) {
                return res.status(401).json({
                    message: 'Фотография не обнаружена, пожалуйста добавьте фотографию!'
                })
            }

            const picture = PopularFileService.saveFile(file);

            const new_popular = await PopularModel.create({
                name: name,
                desc: desc,
                price: price,
                picture: picture
            });

            return res.json(new_popular);

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
    async get_all_popular (req, res) {
        try {
            const populars = await PopularModel.find();

            res.set({
                'Content-Type' : 'application/json; charset=utf-8'
            })
            res.status(200).json(populars);

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
    async delete_all_popular (req, res) {
        try {
            const populars_folder = await PopularModel.find();

            populars_folder.forEach(popular => {
                PopularFileService.deleteFile(popular.picture);
            });

            const populars = await PopularModel.deleteMany({});

            res.status(200).json(populars);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
    async delete_one_popular (req, res) {
        try {
            const id = req.params.id;

            const popular = await PopularModel.findByIdAndDelete(id);
            if(!popular) {
                return res.status(401).json({
                    message: 'Блок с таким id не найден'
                })
            }

            PopularFileService.deleteFile(popular.picture);

            return res.status(200).json(popular);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
}
export default new PopularController;