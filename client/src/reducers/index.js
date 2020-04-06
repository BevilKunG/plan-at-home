import {combineReducers} from 'redux'
import userReducer from './userReducer'
import tokenReducer from './tokenReducer'
import plansReducer from './plansReducer'

export default combineReducers({
    user: userReducer,
    token: tokenReducer,
    plans: plansReducer
})