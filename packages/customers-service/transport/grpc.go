package transport

import (
	"fmt"
	"net"

	"github.com/heruujoko/federated-monorepo/customers-service/pb"
	"github.com/heruujoko/federated-monorepo/customers-service/resolvers"
	"google.golang.org/grpc"
)

func UseGRPCTransport() error {
	PORT := 8002
	lis, _ := net.Listen("tcp", fmt.Sprintf("localhost:%d", PORT))
	grpcServer := grpc.NewServer()
	var customerSrv resolvers.CustomerServer
	pb.RegisterCustomerServiceServer(grpcServer, customerSrv)
	grpcServer.Serve(lis)
	return nil
}
