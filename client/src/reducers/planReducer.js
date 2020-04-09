import { 
    FETCH_PLANS, 
    ADD_PLAN, 
    DELETE_PLAN,
    ADD_ACTIVITY, 
    UPDATE_PLAN
} from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_PLANS: return action.payload.plans

        case ADD_PLAN: return [
            ...state,
            action.payload.plan
        ]

        case UPDATE_PLAN: return state.map(plan => {
            if(plan._id === action.payload.id) {
                return action.payload.plan
            }
            return plan
        })

        case DELETE_PLAN: return state.filter(plan => plan._id !== action.payload.id)

        case ADD_ACTIVITY: return state.map(plan => {
            const {name,date,activities} = plan
            if(plan._id === action.payload.id) {
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