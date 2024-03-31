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

	log.Printf("SetupTransportMethods: graphql initialized")
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}
	log.Fatal(http.ListenAndServe(":"+port, router))

	return nil
}
