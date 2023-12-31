import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";

export async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  app.get('/', (req, res) => res.send('Welcome to my api'));

  const gServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await gServer.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(gServer));

  await new Promise((resolve) =>
    httpServer.listen(
      {
        port: 3000,
      },
      resolve
    )
  );

  console.log("Server ready at http://localhost:3000");

  return app;
}
