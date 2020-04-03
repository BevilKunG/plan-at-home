import { SET_TOKEN } from '../actions/types'

export default (state = null, action) => {
    switch(action.type) {
        case SET_TOKEN: return action.payload
    }
    
    return state
}