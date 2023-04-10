import ComplexModel from "../models/ComplexModel.js";
import ComplexFileService from "../services/ComplexFileService.js";

class ComplexController {
    async add_new_complex (req, res) {
        try {
            const { name, desc, price } = req.body;

            const file = req.files?.picture;

            if(!file) {
                return res.status(401).json({
                    message: 'Фотография не обнаружена, пожалуйста добавьте фотографию!'
                })
            }

            const picture = ComplexFileService.saveFile(file);

            const new_popular = await ComplexModel.create({
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
    async get_all_complex (req, res) {
        try {
            const populars = await ComplexModel.find();

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
    async delete_all_complex (req, res) {
        try {
            const populars_folder = await ComplexModel.find();

            populars_folder.forEach(popular => {
                ComplexFileService.deleteFile(popular.picture);
            });

            const populars = await ComplexModel.deleteMany({});

            res.status(200).json(populars);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
    async delete_one_complex (req, res) {
        try {
            const id = req.params.id;

            const popular = await ComplexModel.findByIdAndDelete(id);
            if(!popular) {
                return res.status(401).json({
                    message: 'Блок с таким id не найден'
                })
            }

            ComplexFileService.deleteFile(popular.picture);

            return res.status(200).json(popular);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
}
export default new ComplexController;