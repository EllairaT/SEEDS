import { combineReducers } from 'redux'

//import articles from './articles'
import articles from './articles.js'
import users from './users.js'

//add all reducers. articles, users, etc
export default combineReducers({
  articles,
  users
})
