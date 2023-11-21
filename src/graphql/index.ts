import http from "http";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { koaMiddleware } from "@as-integrations/koa";
import Application from "koa";
import KoaRouter from "koa-router";
import typeDefs from "./typeDef";
import resolvers from "./resolver";

const applyGraphql = async (app: Application, router: KoaRouter) => {
  const httpServer = http.createServer(app.callback());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();

  const graphqlMiddleware = koaMiddleware(server, {
    context: async ({ ctx }) => ({ token: ctx.headers.token })
  });

  router.all("/graphql", graphqlMiddleware);
};

export default applyGraphql;
