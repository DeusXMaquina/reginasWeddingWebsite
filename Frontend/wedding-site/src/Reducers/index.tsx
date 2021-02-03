import counterReducer from './counter'
import loggedReducer from './isLogged'
import addresses from './addresses'
import {combineReducers} from 'redux'

const rootReducer:any = combineReducers({
  addresses
})

export default rootReducer