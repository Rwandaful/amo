const express = require("express");
const cors = require("cors");
const { sequelize } = require("./database/models");
const { PORT } = require("./config");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log(`Connection has been established successfully.`);
  } catch (error) {
    console.log(error);
  }
});
