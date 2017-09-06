import {
  ERROR_ACKNOWLEDGED,
  NOTICE_ACKNOWLEDGED
} from './types'

export function errorAcknowledged (index) {
  return {
    type: ERROR_ACKNOWLEDGED,
    payload: index
  }
}
export function noticeAcknowledged (index) {
  return {
    type: NOTICE_ACKNOWLEDGED,
    payload: index
  }
}
