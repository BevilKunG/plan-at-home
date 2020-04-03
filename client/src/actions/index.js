import axios from 'axios'
import {FETCH_USER} from './types'

export const fetchUser = (token) => async dispatch => {
    const res = await axios.get('/api/user', {
        headers: {
            token
        }
    })

    return dispatch({ 
        type: FETCH_USER,
        payload: res.data
    })
}