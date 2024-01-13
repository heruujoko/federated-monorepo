import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { root } from "./resolvers";

const server = express();

// setup graphql
server.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
);

server.get("/", (req, res) => {
    res.json({
      server_time: new Date()
    });
});

export default server;