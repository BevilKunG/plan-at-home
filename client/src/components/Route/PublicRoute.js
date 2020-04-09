
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

const PublicRoute = ({component: Component, restricted, user, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            user !== null && restricted ?
                <Redirect to="/plan" />
            : <Component {...props} />
        )} />
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PublicRoute)