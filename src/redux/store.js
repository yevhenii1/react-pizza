import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import rotReducers from './reducers'

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rotReducers,
    composeEnhancers(applyMiddleware(thunk)),
    )

export default store