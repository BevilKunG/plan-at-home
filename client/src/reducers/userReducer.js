import { FETCH_USER, SET_USER } from '../actions/types'

export default (state = null, action) => {
    switch(action.type) {
        case FETCH_USER: return action.payload.user
        case SET_USER: return action.payload.user
    }
    
    return state
}