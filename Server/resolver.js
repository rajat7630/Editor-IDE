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
    testByToken:(_, {token})=>{
      return store.getTestByToken(token);
    },

    testByAuthor: (_, {email}) => {
      return store.getTestByAuthor(email);
    },
    problemsByAuthor:(_, {email})=>{
      return store.getProblemsByAuthor(email);
    }
  },
  Mutation: {
    addProblem: (_, newProblem ) => {
      console.log(newProblem);
      return store.addNewProblem(newProblem);
    },

    addTest: (_, newTest) => {
      return store.createNewTest(newTest);
    },

    addUser:(_,newUser)=>{
      return store.addNewUser(newUser);
    },

    sendMail:(_, mailDetails)=>{
      return store.sendMail(mailDetails);
    }
  }
};
