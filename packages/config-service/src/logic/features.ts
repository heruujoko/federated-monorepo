import { Feature } from "../types/feature";

export const getFeatures = (): Feature[] => {
    return [
        {
            name: 'feature1',
            description: 'this is a feature',
            enabled: true
        },
        {
            name: 'feature2',
            description: 'this is another feature',
            enabled: false
        }
    ]
}