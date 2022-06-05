const path = require('path');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');

const {
  UPLOAD_PATH,
  CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_KEY_SECRET,
} = require('../config');
const Logger = require('./Logger');

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_KEY_SECRET,
  secure: true,
});

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, UPLOAD_PATH);
  },
  filename: (request, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

exports.cloudinaryUploader = (file, folder) =>
  new Promise((resolve) => {
    cloudinary.uploader.upload(file, { folder }, (error, result) => {
      if (error) Logger.warn(error);
      resolve(result);
    });
  });
exports.multerUploader = multer({ storage });

