/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import  { ApolloServer } from 'apollo-server-express';
import * as path from 'path';
import * as cors from 'cors';

import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({ auth: req.headers.authorization })
});

app.use(express.static(path.join(__dirname, '../' , 'dist/blog')));
app.use(cors());

server.applyMiddleware({
  app
});
app.get('*', (_, res) => {
  return res.sendFile(path.resolve(__dirname, '..', 'dist/blog/index.html'));
});

const port = process.env.port || 3333;
const expressServer = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
expressServer.on('error', console.error);
