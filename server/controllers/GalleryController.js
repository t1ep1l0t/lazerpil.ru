import GalleryFileService from "../services/GalleryFileService.js";
import GalleryModel from "../models/GalleryModel.js";

class GalleryController {
    async add_photos (req, res) {
        try {
            const files = req.files.pictures;

            if (!files.length) {
                const file_name = GalleryFileService.saveFile(files);

                await GalleryModel.create({
                    name: file_name
                })

                res.json(file_name);
            }
            else {
                const file_names = [];

                files.forEach(file => {
                    const file_name = GalleryFileService.saveFile(file);
                    file_names.push(file_name);
                })

                for (const file_name of file_names) {
                     await GalleryModel.create({
                        name: file_name
                    })
                }

                res.json(file_names);
            }

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
    async get_all_photos (req, res) {
        try {
            const files = await GalleryModel.find();

            res.status(200).json(files);

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
    async delete_all_photos (req, res) {
        try {
            const files_folder = await GalleryModel.find();

            files_folder.forEach(file => {
                GalleryFileService.deleteFile(file.name);
            });

            const files = await GalleryModel.deleteMany({});

            res.json(files);

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
    async delete_one_photo (req, res) {
        try {
            const id = req.params.id;

            const picture = await GalleryModel.findByIdAndDelete(id);

            GalleryFileService.deleteFile(picture.name);

            res.json(picture);

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Ошибка на стороне сервера, пожалуйста попробуйте позже!'
            });
        }
    }
}

export default new GalleryController;