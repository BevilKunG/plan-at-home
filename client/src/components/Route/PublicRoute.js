
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({component: Component, restricted, user, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            user !== null && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    )
}

export default PublicRoute