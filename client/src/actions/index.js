import axios from 'axios'
import {
    SET_TOKEN, 
    SET_USER, 
    FETCH_USER,
    FETCH_PLANS
} from './types'

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const fetchUser = (token) => async dispatch => {
    const res = await axios.get('/api/user', {
        headers: {
            token
        }
    })

    const {user} = res.data

    return dispatch({ 
        type: FETCH_USER,
        payload: user
    })
}

export const fetchPlans = () => async dispatch => {
    const res = await axios.get('/api/plans')

    const {plans} = res.data
    
    return dispatch({
        type: FETCH_PLANS,
        payload: plans
    })
}