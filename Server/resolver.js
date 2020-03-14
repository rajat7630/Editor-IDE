const store = require('./store.js');
module.exports = {
  Query: {
    getToken: (_, { id }) => {
      return store.getToken(id);
    },

    allProblems: () => {
      return store.getAllProblems();
    },
    problemById: (_, { id }) => {
      return store.getProblemById(id);
    },
    allTests: () => {
      return store.getAllTests();
    },
    testByAuthor: (_, { id }) => {
      return store.getTestByAuthor(id);
    },
    problemsByAuthor: (_, { id }) => {
      return store.getProblemsByAuthor(id);
    }
  },
  Mutation: {
    addProblem: (_, newproblem) => {
      console.log(newproblem);
      return store.addNewProblem(newproblem);
    },

    addTest: (_, newTest) => {
      return store.createNewTest(newTest);
    }
  }
};
