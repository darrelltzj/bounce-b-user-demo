import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import articles from './articles'
import products from './products'
import user from './user'
import flash from './flash'

const rootReducer = combineReducers({
  articles,
  products,
  user,
  flash,
  router: routerReducer,
  form: formReducer
})

export default rootReducer
