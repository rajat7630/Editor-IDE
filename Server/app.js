const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser());

//setting up of database
const Store = require('./store.js');
Store.client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log(err);
  } else console.log(res.rows[0], 'hellllooooooooo');
});
// Setting up of apollo server
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');
const resolvers = require('./resolver.js');
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});
apolloServer.listen();

app.listen(3000, () => {
  console.log('app started');
});
