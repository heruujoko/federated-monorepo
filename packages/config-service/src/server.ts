import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { root } from "./resolvers";
import { loadSync } from "@grpc/proto-loader";
import { loadPackageDefinition, Server as GRPCServer, ServerCredentials } from "@grpc/grpc-js";
import registerRPCResolvers from "./rpcResolvers";

const PROTO_PATH = "./src/pb/features.proto";
// var protoLoader = require("@grpc/proto-loader");

const protoOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = loadSync(PROTO_PATH, protoOptions);
const protoDefs = loadPackageDefinition(packageDefinition);

const server = express();
const grpcServer = new GRPCServer();

registerRPCResolvers(grpcServer, protoDefs);

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

grpcServer.bindAsync(
  "127.0.0.1:8001",
  ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at http://127.0.0.1:8001");
    grpcServer.start();
  }
);

export default server;