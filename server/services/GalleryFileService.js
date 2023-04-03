import * as path from "path";
import * as uuid from 'uuid'



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
}

export default new GalleryFileService();