const { gql } = require('apollo-server');
const { ApolloServer } = require('apollo-server');
const typeDefs = gql`
  scalar JSON
  scalar JSONObject

  type Problem {
    id: ID!
    problemName: String
    description: String
    createdAt: String
    problemTests: JSON
    difficultyLevel: String
    email: String
  }

  type Payload {
    token: String!
  }

  type Test {
    id: ID!
    testName: String
    difficultyLevel: String
    email: String
    createdAt: String
    problems: [Problem]
  }
  type User {
    id: ID!
    email: String
    name: String
    collegeName: String
  }
  type Solution {
    id: ID!
    solution: String
    problem: Problem
  }
  type Query {
    getToken(id: ID!): Payload
    allProblems: [Problem]
    problemById(id: ID!): Problem
    allTests: [Test]
    testById(id:ID!):Test
    testsByAuthor(email: String): [Test]
    problemsByAuthor(email: String): [Problem]
    testByToken(token: String): Test
  }
  type Mutation {
    addProblem(data:addProblemInputs):addProblemOutput!
    deleteProblem(id:ID!):[Problem]
    updateProblem(id:ID!,data:updateProblemInputs):updateProblemOutput!
    addTest(data:addTestInputs):addTestOutput!
    deleteTest(id:ID!):[Test]
    updateTest(id:ID!,data:updateTestInputs):updateTestOutput!
    addUser(data:addUserInputs):userDetail
    sendMail(mailBody: String, email: String):mailSent
    addTestProblem(data:addTestProblemsInputs):testProblemOutput!
  }
  input addProblemInputs {
    problemName: String
    description: String
    problemTests:JSON
    difficultyLevel: String
    email: String
    }
  input addTestInputs {
    testName: String
    difficultyLevel: String
    email:String
  }
  input addUserInputs {
    name: String 
    email: String 
    collegeName: String
  }
  input addTestProblemsInputs {
    t_id: Int!
    p_id: Int!
  }
  input updateProblemInputs {
    problemName:String
    description:String
    problemTests:JSON
    difficultyLevel:String
  }
  input updateTestInputs {
    testName:String
    difficultyLevel:String
  }
  type addProblemOutput {
    success: Boolean!
    message: String
    problems: [Problem]
  }
  type addTestOutput {
    success: Boolean
    message: String
    tests: [Test]
  }
  type userDetail {
    success: Boolean
    message: String
    user: User!
  }
  type testProblemOutput {
    success:Boolean
    message: String
    test:Test!
  }
  type updateProblemOutput {
    success:Boolean
    message:String
    problem:Problem!
  }
  type updateTestOutput {
    success:Boolean
    message:String
    test:Test!
  }
  type mailSent {
    success: Boolean
    message: String
  }
`;

module.exports = typeDefs;

