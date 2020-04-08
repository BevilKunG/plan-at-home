import axios from 'axios'
import {
    FETCH_USER,
    SET_USER, 
    SET_TOKEN, 
    FETCH_PLANS,
    ADD_PLAN,
    UPDATE_PLAN,
    DELETE_PLAN,
    ADD_ACTIVITY
} from './types'

export const fetchUser = (token) => async dispatch => {
    const res = await axios.get('/api/user', {
        headers: {
            token
        }
    })

    const {user} = res.data

    return dispatch({ 
        type: FETCH_USER,
        payload: {
            user
        }
    })
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: {
            user
        }
    }
}

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: {
            token
        }
    }
}

export const fetchPlans = () => async dispatch => {
    const res = await axios.get('/api/plans')

    const {plans} = res.data
    
    return dispatch({
        type: FETCH_PLANS,
        payload: {
            plans
        }
    })
}

export const addPlan = (plan) => {
    return {
        type: ADD_PLAN,
        payload: {
            plan
        }
    }
}

export const updatePlan = (id, plan) => {
    return {
        type: UPDATE_PLAN,
        payload: {
            id,
            plan
        }
    }
} 

export const deletePlan = (id) => {
    return {
        type: DELETE_PLAN,
        payload: {
            id
        }
    }
}

export const addActivity = (activity, planId) => {
    return {
        type: ADD_ACTIVITY,
        payload: {
            planId,
            activity
        }
    }
}