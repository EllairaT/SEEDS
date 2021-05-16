import axios from 'axios'
//import { loginUser } from '../../../server/controllers/users'

const authUrl = 'http://localhost:5000/auth'
const url = 'http://localhost:5000/api'

const loginString = authUrl + '/login'
export const login = () => axios.get(loginString)
export const register = () => axios.get(authUrl)

export const fetchArticles = () => axios.get(url)
