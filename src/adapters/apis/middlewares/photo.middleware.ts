import multer from "multer"
import path from "path"

class photoMiddleware {
    uploadFile(){
        return multer({
            storage: multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, path.resolve("uploads"));
                },
                filename: (req, file, cb) => {
                    cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`)
                },
            })
        })
    }
}


export default new photoMiddleware()