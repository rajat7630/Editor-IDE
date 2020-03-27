const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const authenticationRouter = require('./routes/authenticationRouter');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser());

const indexRouter = require('./routes/index');
const clientLogin = require('./routes/client_routes.js');

app.use('/', indexRouter);
app.use('/test', clientLogin);

app.get('/', (req, res) => {
  res.send('server started');
});

const typeDefs = require('./schema.js');
const resolvers = require('./resolver.js');

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
