require("dotenv/config");
const { PORT = 5000 } = process.env;
const { VERSION = 1 } = process.env;

exports.PORT = PORT;
exports.VERSION = VERSION;
