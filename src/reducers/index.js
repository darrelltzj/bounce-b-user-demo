import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import translation from './translation'
import articles from './articles'
import products from './products'
import user from './user'
import flash from './flash'

const rootReducer = combineReducers({
  translation,
  articles,
  products,
  user,
  flash,
  router: routerReducer,
  form: formReducer
})

export default rootReducer
