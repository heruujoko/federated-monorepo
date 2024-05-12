export type Feature = {
    name: string
    description?: string
    enabled: boolean
}

export type GetFeatureResponse = {
    features: Feature[]
}