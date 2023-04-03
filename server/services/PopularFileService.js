import * as uuid from 'uuid';
import * as path from 'path';
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
}

export default new PopularFileService();