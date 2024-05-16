package transport

import (
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
)

const defaultPort = "7002"

func SetupTransportMethods() error {
	var methodSetupError error
	router := chi.NewRouter()

	methodSetupError = UseGraphqlTransport(router)
	if methodSetupError != nil {
		log.Fatal("SetupTransportMethods: failure", methodSetupError)
		return methodSetupError
	}

	log.Printf("SetupTransportMethods: graphql initialized :7002")
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	go UseGRPCTransport()
	log.Printf("SetupTransportMethods: grpc initialized :8002")

	log.Fatal(http.ListenAndServe(":"+port, router))

	return nil
}
