import {combineReducers} from 'redux'
import userReducer from './userReducer'
import tokenReducer from './tokenReducer'
import planReducer from './planReducer'

export default combineReducers({
    user: userReducer,
    token: tokenReducer,
    plans: planReducer
})