const md5 = require('md5');
import multer from "multer";

//@ts-ignore
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const fileStorage = multer.diskStorage({
    // @ts-ignore
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    // @ts-ignore
    filename: (req, file, cb) => {
        const d = new Date();
        const dateFileName = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
        const ext = file.mimetype.split('/')[1];
        cb(null, md5(file.originalname) + '-' + dateFileName + '.' + ext);
    }
});
export default function multerPhoto() {
    return multer({
        fileFilter: fileFilter,
        storage: fileStorage
    })
}