import {
  ERROR_NEW,
  ERROR_ACKNOWLEDGED,
  NOTICE_NEW,
  NOTICE_ACKNOWLEDGED
} from '../actions/types'

const INITIAL_STATE = {
  errors: [],
  notices: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ERROR_NEW:
      return {
        ...state,
        errors: [
          ...state.errors,
          action.payload
        ]
      }
    case ERROR_ACKNOWLEDGED:
      return {
        ...state,
        errors: [
          ...state.errors.slice(0, action.payload),
          ...state.errors.slice(action.payload + 1)
        ]
      }
    case NOTICE_NEW:
      return {
        ...state,
        notices: [
          ...state.notices,
          action.payload
        ]
      }
    case NOTICE_ACKNOWLEDGED:
      return {
        ...state,
        notices: [
          ...state.notices.slice(0, action.payload),
          ...state.notices.slice(action.payload + 1)
        ]
      }
    default:
      return state
  }
}
