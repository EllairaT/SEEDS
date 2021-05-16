/* eslint-disable import/no-anonymous-default-export */
import { articleTypes } from '../constants/articleConstants'

//initial state of our articles
const initialState = {
  article: {
    key: '',
    title: '',
    author: ''
  }
}

export default (articles = { initialState }, action) => {
  switch (action.type) {
    case articleTypes.FETCH_ALL:
      return action.payload
    case articleTypes.ADD:
      return articles
    default:
      return articles
  }
}
