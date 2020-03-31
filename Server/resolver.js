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
    testById:(_, {id})=>{
      return store.getTestById(id);
    },

    testByAuthor: (_, {email}) => {
      return store.getTestByAuthor(email);
    },
    problemsByAuthor:(_, {email})=>{
      return store.getProblemsByAuthor(email);
    }
  },
  Mutation: {
    addProblem: (parent,{data},ctx,info) => {
      console.log(data);
      return store.addNewProblem(data);
    },

    addTest: (parent,{data},ctx,info) => {
      console.log(data);
      return store.addNewTest(data);
    },

    addUser:(parent,{data},ctx,info)=>{
      console.log(data);
      return store.addNewUser(data);
    },

    sendMail:(_, mailDetails)=>{
      return store.sendMail(mailDetails);
    }
  }
};
