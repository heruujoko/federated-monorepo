package internal

import (
	"time"

	"github.com/google/uuid"
	"github.com/icrowley/fake"

	"github.com/heruujoko/federated-monorepo/customers-service/model"
)

func ResolveCustomers() ([]*model.Customer, error) {
	now := time.Now().UTC()
	var customers = []*model.Customer{}
	for i := 0; i < 10; i++ {
		var c = model.Customer{
			ID:        uuid.New().String(),
			Name:      fake.FullName(),
			Email:     fake.EmailAddress(),
			CreatedAt: now,
			UpdatedAt: &now,
		}
		customers = append(customers, &c)
	}

	return customers, nil
}
