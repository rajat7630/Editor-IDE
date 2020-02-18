const store = require('./store.js');
module.exports = {
  Query: {
    problems: () => {
      return store.getAllProblems();
    },
    problem:(_,id)=>{
        console.log("ww");
        return store.getProblemById(id.id);
    }
  }
};
