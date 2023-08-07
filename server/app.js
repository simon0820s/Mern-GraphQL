import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from 'cors'

export async function startApolloServer() {
  const app = express();

  const gServer = new ApolloServer({
    typeDefs: ``,
    resolvers: () => {},
  });

  await gServer.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(gServer));
}