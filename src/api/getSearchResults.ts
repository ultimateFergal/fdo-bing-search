import axios from "axios"

export function getSearchResults(searchTerm: string) {
  return axios.get(`${process.env.NEXT_PUBLIC_API_SEARCH_ENDPOINT}?q=${searchTerm}`, {
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_API_KEY
    }
  }).then(res => res.data)
}