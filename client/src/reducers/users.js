/* eslint-disable import/no-anonymous-default-export */

import { userConstants } from '../constants/userConstants.js'

export default (users = [], action) => {
  switch (action.type) {
    case userConstants.REGISTER:
      return {
        ...users,
        profile: action.payload.user
      }
    case userConstants.LOGIN:
      return {
        ...users,
        profile: action.payload.user
      }
    case userConstants.SUBMISSION_STATUS:
      return {
        ...users,
        profile: action.payload.user
      }
    default:
      return users
  }
}
