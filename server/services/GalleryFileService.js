import * as path from "path";
import * as uuid from 'uuid'
import * as fs from "fs";



class GalleryFileService {
    saveFile (picture) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('../client/dist/gallery/', fileName);
            picture.mv(filePath);
            return fileName;
        } catch (e) {
            console.log(e);
        }
    }

    deleteFile (picture_name) {
        fs.unlink(path.resolve(`../client/dist/gallery/${picture_name}`), err => {
            if(err) throw err; // не удалось удалить файл
            console.log('Файл успешно удалён');
        });
        return picture_name
    }
}

export default new GalleryFileService();