import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'mwd1206',
  apiKey: process.env.API_KEY,
})