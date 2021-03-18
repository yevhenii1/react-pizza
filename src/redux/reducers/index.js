import { combineReducers } from 'redux'

import filters from './filters'
import pizzas from './pizzas'
import cart from './cart'

const rotReducers = combineReducers({
    filters,
    pizzas,
    cart,
})

export default rotReducers
