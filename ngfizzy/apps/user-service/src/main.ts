/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { User } from './app/entities';
import 'reflect-metadata';

const app = express();



app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to user-service!' });
});

const port = process.env.port || 4444;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/apid`);
});
server.on('error', console.error);
