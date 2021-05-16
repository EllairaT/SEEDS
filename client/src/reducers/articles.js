/* eslint-disable import/no-anonymous-default-export */
import { articleTypes } from '../constants/articleConstants'

export default (articles = [], action) => {
  switch (action.type) {
    case articleTypes.FETCH_ALL:
      return action.payload
    case articleTypes.ADD:
      return articles
    default:
      return articles
  }
}
