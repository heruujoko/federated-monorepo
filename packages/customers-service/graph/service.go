package graph

import (
	"github.com/google/uuid"
	"github.com/icrowley/fake"

	"example.com/subgraph-template-go-gqlgen-boilerplate/graph/model"
)

func FindFoo(id string) (*model.Foo, error) {
	uuid := uuid.New()
	name := fake.FullName()
	var foo = model.Foo{
		ID:   uuid.String(),
		Name: &name,
	}
	return &foo, nil
}
