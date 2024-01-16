type Feature = {
    name: string
    description?: string
    enabled: boolean
}


const getFeatures = (_: any,req: any): Feature[] => {
    console.log({
        headers: req.headers
    })
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

export const root = {
    features: getFeatures,
};