import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
export type GRPCResolverFunc<T,U> = (metaCall: ServerUnaryCall<T,U>, callback: sendUnaryData<U>) => void;