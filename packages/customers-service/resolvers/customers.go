package resolvers

import (
	"context"

	pb "github.com/heruujoko/federated-monorepo/customers-service/pb"
)

type CustomerServer struct {
	pb.CustomerServiceServer
}

func (CustomerServer) GetCustomer(ctx context.Context, req *pb.GetCustomerRequest) (*pb.Customer, error) {
	return &pb.Customer{
		Id:    "XID",
		Name:  "X NAME",
		Email: "X email",
	}, nil
}
