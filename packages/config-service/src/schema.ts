const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { join } = require("path");

const schema = loadSchemaSync(join(__dirname, "./graph/main.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

export default schema;