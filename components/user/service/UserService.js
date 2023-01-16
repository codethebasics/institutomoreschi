import axios from 'axios'

const client = axios.create()
client.defaults.baseURL = process.env.API_URL || 'http://localhost:3333'

export async function list() {
  try {
    return await client.get('/users')
  } catch (e) {
    console.error(e)
    throw e
  }
}

export async function findById(id) {
  try {
    return await client.get(`/users?id=${id}`)
  } catch (e) {
    console.error(e)
    throw e
  }
}

export async function create(user) {
  try {
    return await client.post('/users', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: user
    })
  } catch (e) {
    console.error(e)
    throw e
  }
}

export async function remove(user) {
  try {
    return await client.delete('/users', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        id: user.id
      }
    })
  } catch (e) {
    console.error(e)
    throw e
  }
}
