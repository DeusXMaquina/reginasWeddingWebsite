import { createStore } from 'redux'
import addressReducer from '../Reducers/addressReducer'

const store = createStore(addressReducer)

export default store