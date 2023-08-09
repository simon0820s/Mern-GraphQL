import { startApolloServer } from "./app.js";
import {typeDefs} from './graphql/typeDef.js'
import {resolvers} from './graphql/resolvers.js'

startApolloServer(typeDefs, resolvers);