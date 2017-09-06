import { createStore, applyMiddleware } from 'redux'
import history from '../history'
import { routerMiddleware } from 'react-router-redux'
// import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

// const loggerMiddleware = createLogger()

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        // loggerMiddleware
      )
    )
  )
}

export default configureStore
