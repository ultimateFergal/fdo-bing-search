import axios from "axios"

export function getSuggestions(searchTerm: string) {
  return axios.get(`${process.env.NEXT_PUBLIC_API_SUGGESTIONS_ENDPOINT}?q=${searchTerm}`, {
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_API_KEY
    }
  }).then(res => res.data)
}