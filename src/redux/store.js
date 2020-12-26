import {createStore} from 'redux'

import rotReducers from './reducers'

const store = createStore(rotReducers)

export default store