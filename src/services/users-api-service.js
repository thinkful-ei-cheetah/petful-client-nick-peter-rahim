import config from '../config'

const UsersApiService = {
  async getUsers() {
    const res = await fetch(`${config.API_ENDPOINT}/users/queue`, {
      headers: {
        'content-type': 'application/json'
      }
    })
    
    return await (!res.ok
      ? res.json().then(e => Promise.reject(e))
      : res.json())
  },

  userAdopts() {
    return fetch(`${config.API_ENDPOINT}/users/adopt`, {
      method: 'DELETE'
    })
  }
}

export default UsersApiService
