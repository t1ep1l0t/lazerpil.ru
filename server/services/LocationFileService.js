import * as uuid from "uuid";
import path from "path";
import fs from "fs";

class LocationFileService {
    saveFile (path_to_dir, picture) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve(path_to_dir, fileName);
            picture.mv(filePath);
            return fileName;
        } catch (e) {
            console.log(e);
        }
    }
    deleteFile (path_to_dir) {
        fs.unlink(path.resolve(path_to_dir), err => {
            if(err) throw err; // не удалось удалить файл
            console.log('Файл успешно удалён');
        });
        return path_to_dir
    }
    deleteFiles (path_to_dir) {
        fs.readdir(path_to_dir, (err, files) => {
            if(err) throw err; // не прочитать содержимое папки
            files.forEach(file => {
                fs.unlink(path.resolve(path_to_dir + file), err => {
                    if(err) throw err; // не удалось удалить файл
                    console.log('Файл успешно удалён');
                });
            })
        });
    }
}

export default new LocationFileService();