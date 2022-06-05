require('dotenv/config');
const path = require('path');
const {
  PORT = 5000,
  VERSION = 1,
  LOGIN_SECRET,
  NODE_ENV = 'DEVELOPMENT',
  CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_KEY_SECRET,
} = process.env;

exports.PORT = PORT;
exports.VERSION = VERSION;
exports.LOGIN_SECRET = LOGIN_SECRET;
exports.NODE_ENV = NODE_ENV;
exports.CLOUD_NAME = CLOUD_NAME;
exports.CLOUDINARY_API_KEY = CLOUDINARY_API_KEY;
exports.CLOUDINARY_API_KEY_SECRET = CLOUDINARY_API_KEY_SECRET;

exports.UPLOAD_PATH = path.join(__dirname, '..', 'public', 'uploads', 'temps');

