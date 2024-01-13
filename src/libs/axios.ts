import axios from 'axios'

const API = axios.create({
  baseURL: process.env.URL_API_JSON_SERVER,
})

export default API
