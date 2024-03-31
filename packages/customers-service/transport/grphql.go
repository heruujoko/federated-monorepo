package transport

import (
	"github.com/go-chi/chi/v5"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/heruujoko/federated-monorepo/customers-service/graph"
	"github.com/heruujoko/federated-monorepo/customers-service/graph/generated"
)

func UseGraphqlTransport(router *chi.Mux) error {
	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	router.Handle("/", playground.Handler("GraphQL playground", "/graphql"))
	router.Handle("/graphql", srv)

	return nil
}
