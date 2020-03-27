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

    testsByAuthor: (_, {email}) => {
      return store.getTestsByAuthor(email);
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
    deleteProblem:(parent,{id},ctx,info) => {
       console.log(id);
       return store.deleteProblem(id);
    },
    updateProblem:(parent,{id,data},ctx,info) => {
        console.log(id,data);
        return store.updateProblem(id,data);
    },
    addTest: (parent,{data},ctx,info) => {
      console.log(data);
      return store.addNewTest(data);
    },
    deleteTest:(parent,{id},ctx,info) => {
        console.log(id);
        return store.deleteTest(id);
    },
    updateTest:(parent,{id,data},ctx,info) => {
        console.log(id,data);
        return store.updateTest(id,data);
    },
    addUser:(parent,{data},ctx,info)=>{
      console.log(data);
      return store.addNewUser(data);
    },

    addTestProblem:(parent,{data},ctx,info) => {
        console.log(data);
        return store.addTestProblem(data);
    },
 
    sendMail:(_, mailDetails)=>{
      return store.sendMail(mailDetails);
    }
  }
};
