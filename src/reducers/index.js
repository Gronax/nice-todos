import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import todos from './todos'
import filter from './filter'

const composeEnhancers = composeWithDevTools({})

const reducers = combineReducers({
  todos,
  filter
})

const middleware = applyMiddleware(
  thunk
)

export const store = createStore(
  reducers,
  composeEnhancers(middleware)
)