import * as api from '../api/index.js'
import { articleTypes } from '../constants/articleConstants.js'

//this file is for all actions that have anything to do with users.

export const getArticles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArticles()
    console.log(data)
    dispatch({ type: articleTypes.FETCH_ALL, payload: data })
  } catch (err) {}
}
