const {gql} =require("apollo-server");
const {ApolloServer} = require("apollo-server");
const typeDefs=gql`
    type Problem {
        id:ID!,
        description:String,
        testcase:String,
        output:String
    }

    type Admin {
        id:ID!,
        email: String,
        accessToken: String
    }

    type Solution{
        id:ID!,
        code:String,
        problemId:Int
    }

    type Student{
        id:ID!,
        email:String,
        accessToken:String,
        solutions:[Solution]
    }

    type Query{
        problems:[Problem],
        problem(id:String): Problem
    }

    type Mutation{
        changeProblem(problemid:ID!):UpdateProblem!
    }

    type UpdateProblem{
        success:Boolean!,
        message : String,
        Problems:[Problem]
    }
    `;

module.exports=typeDefs;