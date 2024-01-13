require('graphql-import-node/register');

const { buildSubgraphSchema } = require("@apollo/subgraph")
const schemaFile = require('./graph/main.graphql');
const gql = require("graphql-tag");

const schema = buildSubgraphSchema([schemaFile])

export default schema;