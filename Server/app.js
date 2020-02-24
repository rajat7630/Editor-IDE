const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser());


const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;passport.serializeUser(function(user, done) {
 done(null, user);
});passport.deserializeUser(function(user, done) {
 done(null, user);
});passport.use(
 new GoogleStrategy(
  {
   clientID: "757136523452-7j74hd4r4vos4s813tf8iod5830l2b3l.apps.googleusercontent.com",
   clientSecret: "LFbHx4Ju_hpRQI18lNDhgX5d",
   callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);


var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");

app.use("/", indexRouter);


const proxy = require('redbird')({
  port: 80,
  xfwd: true,
  letsencrypt: {
    path: __dirname + '/certs',
    port: 9999,
  },
  ssl: {
    http2: true,
    port: 443,
  },
});

let connectionInfo = {
  ssl: {
    letsencrypt: {
      email: 'rajat.garg@sourcefuse.com',
      production: false,
    },
  },
};
let data = [
  {
    id: 61167925,
    problem: 'Write a program to find sum a array of integers',
    test_case: '[1, 2, 3, 4, 5]',
    test_output: '[15]',
    solution: 'function solution() { return 0; }',
  },
  {
    id: 92035553,
    problem: 'Write  program to find product of given numbers',
    test_case: '[1, 2, 3]',
    test_output: '[6]',
    solution: 'function solution() { return 1; }',
  },
];

const authenticationRouter = require('./routes/authenticationRouter');

//app.use('/login',authenticationRouter);

app.get('/', (req, res) => {
  res.send('server started');
});
app.get('/allData', (req, res) => {
  res.send({
    data: data,
  });
});

app.post('/addNewProblem', (req, res) => {
  data.push(req.body);
  res.send('done');
});

app.post('/updateSolution/:id', (req, res) => {
  data = data.map(problem => {
    if (problem.id == req.params.id) {
      return { ...problem, ...req.body };
    }
    return problem;
  });
  res.send({
    status: 200,
  });
});

app.get('/result/:id', (req, res) => {
  let problem;
  data.forEach(prob => {
    if (prob.id == req.params.id) {
      problem = prob;
      return true;
    }
  });
  let outputData, outputCheck;
  try {
    outputData = eval(
      `${problem.solution} solution(${JSON.stringify(
        JSON.parse(problem.test_case),
      )})`,
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
    output: outputData,
  });
});

app.post('/problem/:id', (req, res) => {
  data = data.map(problem => {
    if (problem.id == req.params.id) {
      return { ...problem, ...req.body };
    }
    return problem;
  });
  res.send({
    status: 200,
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
    message: 'deleted',
  });
});

app.listen(3000, () => {
  console.log('app started');
});
