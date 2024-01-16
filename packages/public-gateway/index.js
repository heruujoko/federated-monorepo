const { ApolloServer } = require('apollo-server');
const { ApolloGateway, RemoteGraphQLDataSource } = require('@apollo/gateway');
const { readFileSync } = require('fs');
const depthLimit = require('graphql-depth-limit');

const { withRequestID } = require('./middlewares/request-id-trace');

const supergraphSdl = readFileSync('./supergraph.graphql').toString();
const gateway = new ApolloGateway({
  supergraphSdl,
  buildService({ url, name }) {
    return new (class extends RemoteGraphQLDataSource {
      willSendRequest({ request, context }) {
        // The header set here is transferred to the subgraph.
        request.http.headers.set('x-user-id', context.userId);
        withRequestID(request)
      }
    })({
      url,
      name,
    });
  },
});

const server = new ApolloServer({
  gateway,
  validationRules: [depthLimit(10)]
});

server.listen().then(({ url }) => {
  console.log(`Gateway ready at ${url}`);
}).catch(err => {console.error(err)});