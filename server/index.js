import { startApolloServer } from "./app.js";
import {typeDefs} from './graphql/typeDef.js'
import {resolvers} from './graphql/resolvers.js'
import { connectDb } from "./db.js";

connectDb()

startApolloServer(typeDefs, resolvers);