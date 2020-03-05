const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser());

var indexRouter = require('./routes/index');
//var usersRouter = require("./routes/users");

app.use('/', indexRouter);
const authenticationRouter = require('./routes/authenticationRouter');

//app.use('/login',authenticationRouter);

app.get('/', (req, res) => {
  res.send('server started');
});

//setting up of database
// const Store = require('./store.js');
// Store.client.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.log(err);
//   } else console.log(res.rows[0], 'hellllooooooooo');
// });
// Setting up of apollo server
const typeDefs = require('./schema.js');
const resolvers = require('./resolver.js');
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
