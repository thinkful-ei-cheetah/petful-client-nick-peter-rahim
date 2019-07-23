const API_ENDPOINT = 'https://localhost:8080/api'

const AdoptApiService = {
  getDogs() {
    return fetch(`${API_ENDPOINT}/dogs`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getCats() {
    return fetch(`${API_ENDPOINT}/cats`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getUsers() {
    return fetch(`${API_ENDPOINT}/users`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  }
}

export default AdoptApiService

// export default class API extends Component {
//   static apiGetDog() {
//     // const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/dog'
//     const apiURL = 'https://localhost:8080/api/dog'
//     // const queryString = this.formatQueryParams(data);
//     const url = apiURL

//     const options = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }

//     return fetch(url, options)
//   }

//   static apiGetCat() {
//     const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/cat'
//     // const queryString = this.formatQueryParams(data);
//     const url = apiURL

//     const options = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }

//     return fetch(url, options)
//   }

//   static apiDeleteDog(trail) {
//     const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/dog'
//     const options = {
//       method: 'DELETE',
//       body: JSON.stringify(trail),
//       headers: {
//         'content-type': 'application/json'
//       }
//     }
//     // console.log(options.body)
//     return fetch(apiURL, options)
//   }

//   static apiDeleteCat(trail) {
//     const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/cat'
//     const options = {
//       method: 'DELETE',
//       body: JSON.stringify(trail),
//       headers: {
//         'content-type': 'application/json'
//       }
//     }
//     // console.log(options.body)
//     return fetch(apiURL, options)
//   }
// }
