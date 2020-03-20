const store = require('./store.js');
module.exports = {
  Query: {
    allProblems: () => {
      return store.getAllProblems();
    },
    problemById: (_, {id}) => {
      return store.getProblemById(id);
    },
    allTests: () => {
      return store.getAllTests();
    },
    testByAuthor: (_, {email}) => {
      return store.getTestByAuthor(email);
    },
    problemsByAuthor:(_, {email})=>{
      return store.getProblemsByAuthor(email);
    }
  },
    Mutation:{
      addProblem:(_, newproblem)=>{
        console.log(newproblem);
        return store.addNewProblem(newproblem);
      },

      addTest:(_, newTest)=>{
        return store.createNewTest(newTest);
      }
    }
  }