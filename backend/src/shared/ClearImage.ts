import fs from "fs";
import path from "path";

export default (filePath: string) => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log(err));
};