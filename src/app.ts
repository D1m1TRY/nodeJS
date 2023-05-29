import express, { Application } from 'express';
import cors from 'cors';

import { CONFIG } from './config';
import { createRouter } from './routes';
// import { router as healthCheck } from './routes/router';
import { notFoundHandler, errorMiddleware } from './middlewares';
import { logOnceSysInfo } from './utils';
import path from 'path';
const app: Application = express();

export async function createServer() {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(express.static('public'));
  app.get('/', (req, res) => {
    const projectRoot = path.resolve('./');
    res.sendFile(projectRoot + '/views/index.html');
  });

  // app.use(healthCheck);

  createRouter(app);

  app.use(notFoundHandler);
  app.use(errorMiddleware);

  app.listen(CONFIG.SERVER_PORT, () => {
    console.log(`Server started on port '${CONFIG.SERVER_PORT}'...`);
    logOnceSysInfo();
  });

  return app;
}