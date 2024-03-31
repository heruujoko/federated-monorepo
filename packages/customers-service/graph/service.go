package graph

import (
	"github.com/google/uuid"
	"github.com/icrowley/fake"

	"github.com/heruujoko/federated-monorepo/customers-service/model"
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
