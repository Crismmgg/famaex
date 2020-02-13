const ENDPOINT = 'https://5dfb6cf80301690014b8fb0a.mockapi.io/api/v1/reports'

export default () => {
  return fetch(ENDPOINT)
    .then(resp => resp.json())
}