import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import flash from './flash'

const rootReducer = combineReducers({
  flash,
  router: routerReducer,
  form: formReducer
})

export default rootReducer
