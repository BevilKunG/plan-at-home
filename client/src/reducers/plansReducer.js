import { FETCH_PLANS, ADD_PLAN, ADD_ACTIVITY } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_PLANS: return action.payload
        case ADD_PLAN: return [
            ...state,
            action.payload
        ]
        case ADD_ACTIVITY: return state.map(plan => {
            const {name,date,activities} = plan
            if(plan._id == action.payload.planId) {
                return {
                    name,
                    date,
                    activities: [
                        ...activities, 
                        action.payload.activity
                    ]
                }
            }

            return plan
        })
    }
    
    return state
}