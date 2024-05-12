import { getFeatures as logicGetFeatures } from "./logic/features";
import { Feature } from "./types/feature";

const getFeatures = (_: any,req: any): Feature[] => {
    const features = logicGetFeatures();
    return features
}

export const root = {
    features: getFeatures,
};