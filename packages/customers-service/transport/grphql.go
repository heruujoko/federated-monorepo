package transport

import (
	"github.com/go-chi/chi/v5"

	"example.com/subgraph-template-go-gqlgen-boilerplate/graph"
	"example.com/subgraph-template-go-gqlgen-boilerplate/graph/generated"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

func UseGraphqlTransport(router *chi.Mux) error {
	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	router.Handle("/", playground.Handler("GraphQL playground", "/graphql"))
	router.Handle("/graphql", srv)

	return nil
}
