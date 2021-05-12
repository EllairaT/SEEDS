import axios from 'axios'
// import { loginUser } from '../../../server/controllers/users'

const authUrl = 'http://localhost:5000/auth'
const url = 'http://localhost:5000/articles'

const login = () => axios.get(authUrl)
const fetchArticles = () => axios.get(url)
