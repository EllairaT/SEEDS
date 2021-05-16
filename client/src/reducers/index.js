import { combineReducers } from 'redux'

//import articles from './articles'
import articles from './articles.js'
import users from './users.js'

//add all reducers. articles, users, etc
const rootReducers = combineReducers({
  articles,
  users
})

export default rootReducers
