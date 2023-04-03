import * as uuid from 'uuid';
import * as path from 'path';
import fs from "fs";
class PopularFileService {
    saveFile (picture) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('../client/dist/popular_images/', fileName);
            picture.mv(filePath);
            return fileName;
        } catch (e) {
            console.log(e);
        }
    }
    deleteFile (file_name) {
        fs.unlink(path.resolve(`../client/dist/popular_images/${file_name}`), err => {
            if(err) throw err; // не удалось удалить файл
            console.log('Файл успешно удалён');
        });
        return file_name
    }
}

export default new PopularFileService();