import { Server as GRPCServer, GrpcObject } from "@grpc/grpc-js";
import { GetFeatureResponse } from "./types/feature";
import { GRPCResolverFunc } from "./types/internal";
import { getFeatures as logicGetFeatures } from "./logic/features";

const getFeatures: GRPCResolverFunc<null, GetFeatureResponse> = (_, callback) => {
    const features = logicGetFeatures();
    callback(null, {
        features,
    });
}

const registerRPCResolvers = (grpcServer: GRPCServer, protoDefs: GrpcObject) => {
    // @ts-ignore
    grpcServer.addService(protoDefs.FeatureService.service, {getFeatures});
}

export default registerRPCResolvers;