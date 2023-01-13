import axios from 'axios'

const client = axios.create()
client.defaults.baseURL = process.env.API_URL || 'http://localhost:3333'

export async function list() {
  return client.get('/roles', {
    headers: {
      Accept: 'application/json'
    }
  })
}
