protoc --proto_path=./ --go_out=. --go_opt=paths=source_relative ./pb/*.proto --go_opt=paths=source_relative --go-grpc_out=.
go mod tidy