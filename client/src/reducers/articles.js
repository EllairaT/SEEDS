/* eslint-disable import/no-anonymous-default-export */
import { Types } from '../constants/articleActions'

const initialState = {
  article: {
    key: '',
    title: '',
    author: ''
  },
  formSubmitted: false
}

export default (articles = initialState, action) => {
  switch (action.type) {
    case Types.FETCH:
      return action.payload
    case Types.ADD:
      return articles
    default:
      return articles
  }
}
