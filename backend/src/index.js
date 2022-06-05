const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { sequelize } = require('./database/models');
const { PORT, UPLOAD_PATH } = require('./config');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express');
const swaggerSpecification = require('./swagger');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
if (!fs.existsSync(UPLOAD_PATH)) fs.mkdirSync(UPLOAD_PATH, { recursive: true });
// if (!fs.existsSync(logsFolder)) fs.mkdirSync(logsFolder, { recursive: true });

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecification));
app.use('/', routes);
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(error);
  }
});

