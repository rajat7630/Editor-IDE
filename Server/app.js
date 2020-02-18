const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser());

//setting up of database
const Store = require("./store.js");
Store.client.query('SELECT NOW()', (err, res) => {
  if(err)
  {
    console.log(err);
  }
  else
  console.log(res.rows[0], "hellllooooooooo");
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

app.get('/', (req, res) => {
  res.send('server started');
});
app.get('/allData', (req, res) => {
  res.send({
    data: data
  });
});

app.post('/addNewProblem', (req, res) => {
  data.push(req.body);
  res.send('done');
});

app.post('/updateSolution/:id', (req, res) => {
  data = data.map((problem) => {
    if (problem.id == req.params.id) {
      return { ...problem, ...req.body };
    }
    return problem;
  });
  res.send({
    status: 200
  });
});

app.get('/result/:id', (req, res) => {
  let problem;
  data.forEach((prob) => {
    if (prob.id == req.params.id) {
      problem = prob;
      return true;
    }
  });
  let outputData, outputCheck;
  try {
    outputData = eval(
      `${problem.solution} solution(${JSON.stringify(
        JSON.parse(problem.test_case)
      )})`
    );
    outputCheck =
      JSON.stringify(outputData) ===
      JSON.stringify(JSON.parse(problem.test_output))
        ? 'Correct Answer'
        : 'Wrong Answer';
  } catch (err) {
    outputData = err.message;
    outputCheck = 'Wrong Answer';
  }

  res.send({
    answer: outputCheck,
    output: outputData
  });
});

app.post('/problem/:id', (req, res) => {
  data = data.map((problem) => {
    if (problem.id == req.params.id) {
      return { ...problem, ...req.body };
    }
    return problem;
  });
  res.send({
    status: 200
  });
});

app.delete('/problem/:id', (req, res) => {
  data = data.filter((problem, index) => {
    if (problem.id == req.params.id) {
      return false;
    }
    return true;
  });
  res.send({
    status: 200,
    message: 'deleted'
  });
});

app.listen(3000, () => {
  console.log('app started');
});
