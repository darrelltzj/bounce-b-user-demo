import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import articles from './articles'
import user from './user'
import flash from './flash'

const rootReducer = combineReducers({
  articles,
  user,
  flash,
  router: routerReducer,
  form: formReducer
})

export default rootReducer
