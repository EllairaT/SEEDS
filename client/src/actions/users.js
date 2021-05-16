import * as api from '../api/index.js'
import { userConstants } from '../constants/userConstants.js'

//this file is for all actions that have anything to do with users.

export const login = () => async (dispatch) => {
  try {
    const { data } = await api.login()
    dispatch({ type: userConstants.LOGIN_REQUEST, payload: data })
  } catch (err) {}
}

function logout() {}

//pass a user object
export const register = () => async (dispatch) => {
  try {
    const { data } = await api.register()
    dispatch({ type: userConstants.REGISTER_REQUEST, payload: data })
  } catch (err) {}
}
