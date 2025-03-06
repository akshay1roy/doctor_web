
import multer from 'multer'

const storage=multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload=multer({storage})

export default upload;











// import multer from 'multer';
// import path from 'path';

// // Define storage settings
// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, 'uploads/'); // Ensure 'uploads/' folder exists
//     },
//     filename: function (req, file, callback) {
//         callback(null, Date.now() + '-' + file.originalname); // Unique filename to prevent overwriting
//     }
// });

// // File type validation
// const fileFilter = (req, file, callback) => {
//     const allowedTypes = /jpeg|jpg|png/;
//     const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

//     if (extName) {
//         return callback(null, true);
//     }
//     callback(new Error('Only JPEG, JPG, and PNG files are allowed!'));
// };

// // Set upload limits
// const upload = multer({
//     storage,
//     fileFilter,
//     limits: { fileSize: 5 * 1024 * 1024 } // 5MB max file size
// });

// export default upload;
