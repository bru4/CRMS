import 'isomorphic-fetch'

const API_ROOT = 'http://cs.udianhuo.com/crms/api';

export const fetchList = type => fetch(`${API_ROOT}/youzan/${type}/query`)
    .then(response =>
      response.json().then(json => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return { json, response };
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    )