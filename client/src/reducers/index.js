import { combineReducers } from 'redux'

//import articles from './articles'
import articles from './articles.js'

// a reducer is a function that is equal to a function that accepts state and action
// do logic based on action/state

//add all reducers. articles, users, etc
export default combineReducers({
  articles
})
