import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://0.0.0.0', // Should add my ip address
})
