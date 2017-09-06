import { push } from 'react-router-redux'

export function redirectToNewMembership () {
  return function (dispatch) {
    dispatch(push('/customers/new'))
  }
}
