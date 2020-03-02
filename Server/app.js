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

let data = [
  {
    id: 61167925,
    problem: 'Write a program to find sum a array of integers',
    test_case: '[1, 2, 3, 4, 5]',
    test_output: '[15]',
    solution: 'function solution() { return 0; }'
  },
  {
    id: 92035553,
    problem: 'Write  program to find product of given numbers',
    test_case: '[1, 2, 3]',
    test_output: '[6]',
    solution: 'function solution() { return 1; }'
  }
];

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