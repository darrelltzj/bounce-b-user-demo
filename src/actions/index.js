export function errorHandler (dispatch, error, type) {
  dispatch({
    type: type,
    payload: error.message
  })
}
