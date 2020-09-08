const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const express = require('express');

const path = require('path');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

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


app.listen(4000, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
