import axios from 'axios'
import {SET_TOKEN, FETCH_USER} from './types'

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const fetchUser = (token) => async dispatch => {
    const res = await axios.get('/api/user', {
        headers: {
            token
        }
    })

    const user = res.data

    return dispatch({ 
        type: FETCH_USER,
        payload: user
    })
}