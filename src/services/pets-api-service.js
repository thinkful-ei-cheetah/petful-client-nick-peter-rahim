import config from '../config'

const PetsApiService = {
  getPetsQueue(type) {
    return fetch(`${config.API_ENDPOINT}/${type}/queue`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  }
}

export default PetsApiService
