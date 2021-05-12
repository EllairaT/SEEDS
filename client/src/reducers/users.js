/* eslint-disable import/no-anonymous-default-export */

import { Types } from '../constants/userActions'

const initialState = {
  profile: {
    name: '',
    email: '',
    profileImage: ''
  },
  formSubmitted: false
}

export default (users = initialState, action) => {
  switch (action.type) {
    case Types.REGISTER:
      return {
        ...users,
        profile: action.payload.user,
        formSubmitted: false
      }
    case Types.LOGIN:
      return {
        ...users,
        profile: action.payload.user,
        formSubmitted: false
      }
    case Types.SUBMISSION_STATUS:
      return {
        ...users,
        profile: action.payload.user,
        formSubmitted: false
      }
    default:
      return users
  }
}
