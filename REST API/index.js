const express = require('express');
const cors = require('cors');

const { PORT } = require('./config');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');



start();

async function start() {
  const app = express();

  app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
  }));

  await databaseConfig(app);
  expressConfig(app);
  routesConfig(app);


  app.listen(PORT, () => console.log(`Application started at http://localhost:${PORT}`));
}