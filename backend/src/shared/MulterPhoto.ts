import multer from "multer";

const {v4: uuidv4} = require('uuid');
//@ts-ignore
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        // const d = new Date();
        // const dateFileName = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
        const ext = file.mimetype.split('/')[1];
        cb(null, `${uuidv4()}.${ext}`);
    }
});
export default function multerPhoto() {
    return multer({
        fileFilter: fileFilter,
        storage: fileStorage
    })
}