import * as api from '../api'

import { Types } from '../constants/userActions'

//Action creators are functions that return actions

export const ActionCreators = {
  register: (user) => ({ type: Types.REGISTER, payload: { user } }),

  login: (user) => ({ type: Types.LOGIN, payload: { user } }),

  form_submission: (user) => ({ type: Types.SUBMISSION_STATUS, payload: { user } })
}
