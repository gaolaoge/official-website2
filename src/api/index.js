import axios from 'axios'


let http = axios.create({
  baseURL: 'http://192.168.1.95:8080/',
  withCredentials: true,
  timeout: 5000,
  headers: {

  }
})

export default http
