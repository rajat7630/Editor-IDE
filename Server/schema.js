const { gql } = require('apollo-server');
const { ApolloServer } = require('apollo-server');
const typeDefs = gql`
scalar JSON
scalar JSONObject

  type Problem {
    id: ID!
    problemName :String
    description: String
    createdAt: String
    testCases: JSON
    difficultyLevel: String
    email:String
  }
  type Test {
    id: ID!
    testName: String
    difficultyLevel: String
    email: String
    createdAt: String
    problems :[Problem]
  }
  type User {
    id: ID!
    email: String
    name: String
    collegeName: String
    solution: [Solution]
  }
  type Solution {
    id: ID!
    solution: String
    problem: Problem
  }
  type Query {
    allProblems: [Problem]
    problemById(id: ID!): Problem
    allTests: [Test]
    testByAuthor(email: String): [Test]
    problemsByAuthor(email: String): [Problem]
  }
  type Mutation {
    addProblem(
      description: String
      testCase: String
      output: String
      authorId: ID
    ): addNewProblem!
    addTest(
      testName: String
      difficulty: String
      authorId: ID
      problem: [ID]
    ): createTest
  }
  type createTest{
    success:Boolean,
    message:String,
    test:[Test]
  }
  type addNewProblem {
    success: Boolean!
    message: String
    Problems: [Problem]
  }
`;

module.exports = typeDefs;

