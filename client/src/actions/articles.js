import * as api from '../api/index.js'
import { articleTypes } from '../constants/articleConstants.js'


export const getArticles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArticles()
    dispatch({ type: articleTypes.FETCH_ALL, payload: data })
    console.log(data)
  } catch (err) { }
  return <></>
}
