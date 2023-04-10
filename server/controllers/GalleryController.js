import GalleryModel from "../models/GalleryModel.js";
import GalleryFileService from "../services/GalleryFileService.js";

class GalleryController {
    async add (req, res) {
        try {
            const picture = req.files.picture;

            if(!picture) {
                return res.status(400).json({
                    message: 'Ошика. Фотография не обнаружена.'
                })
            }

            const picture_name = GalleryFileService.saveFile(picture);

            if(!picture_name) {
                return res.status(400).json({
                    message: 'Ошибка. Не удалось сохранить фотграфию.'
                })
            }

            const save_to_gallery = await GalleryModel.create({
                picture: picture_name
            })

            res.status(200).json({
                message: 'Фаил успешно сохранен',
                file: save_to_gallery
            })

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера.'
            })
        }
    }
    async get (req, res) {
        try {
            const files = await GalleryModel.find();

            res.status(200).json(files);

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера.'
            })
        }
    }
    async delete__one (req, res) {
        try {
            const id = req.params.id;

            const find_file = await GalleryModel.findOne({_id: id});

            if(!find_file) {
                return res.status(400).json({
                    message: 'Ошибка. Файл с таким id не найден.'
                })
            }

            const delete_file = GalleryFileService.deleteFile(find_file.picture);

            if(!delete_file) {
                return res.status(400).json({
                    messgae: 'Ошибка. Не удалось удалить фаил.'
                })
            }

            await GalleryModel.deleteOne({_id: id});
            res.status(200).json({
                message: 'Фаил успешно удален.'
            })

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера.'
            })
        }
    }
    async delete__all (req, res) {
        try {

            const all_files = await GalleryModel.find();

            all_files.forEach(file => {
                GalleryFileService.deleteFile(file.picture);
            })

            const deleted_files = await GalleryModel.deleteMany({});

            res.status(200).json({
                message: 'Все файлы успешно удалены.',
                deleted_files
            })

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Ошибка на стороне сервера.'
            })
        }
    }
}

export default new GalleryController();