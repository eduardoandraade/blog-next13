import { createClient } from "next-sanity"


const projectId = '8r7m0g0c'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, 
});