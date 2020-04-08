import { FETCH_PLANS, ADD_PLAN } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_PLANS: return action.payload
        case ADD_PLAN: return [
            ...state,
            action.payload
        ]
    }
    
    return state
}