import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3004',
})

export default API
