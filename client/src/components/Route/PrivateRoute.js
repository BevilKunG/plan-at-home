import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({component: Component, user, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            user !== null ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PrivateRoute)
