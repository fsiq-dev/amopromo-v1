import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import BoardReducer from './board/board.reducer'
const reducers = combineReducers({
  board: BoardReducer,
})

const middlewares = [thunk]

const compose = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(reducers, compose)

export default store
