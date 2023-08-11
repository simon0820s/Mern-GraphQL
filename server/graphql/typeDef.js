import { gql } from "graphql-tag";
export const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    createProject(name: String, desciption: String): Project
  }

  type Project {
    _id: ID,
    name: String, 
    description: String
  }
`;
