import {
  ENGLISH_TRANSLATION,
  CHINESE_TRANSLATION
} from '../actions/types'

const INITIAL_STATE = 'en'

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ENGLISH_TRANSLATION:
      return 'en'
    case CHINESE_TRANSLATION:
      return 'cn'
    default:
      return state
  }
}
