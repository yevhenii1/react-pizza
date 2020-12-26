import { combineReducers } from 'redux'

import filtersReducers from './filters'
import pizzasReducers from './pizzas'

const rotReducers = combineReducers({
    filters: filtersReducers,
    pizzas: pizzasReducers,
})

export default rotReducers
