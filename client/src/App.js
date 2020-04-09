import React, {Component} from 'react'
import {BrowserRouter,Switch} from 'react-router-dom'
import Layout from './components/Layout'
import {Home, Register, Login, Plan} from './pages'
import {PublicRoute, PrivateRoute} from './components/Route'
import {connect} from 'react-redux'
import {setToken, fetchUser, fetchPlans} from './actions'

class App extends Component {
    async componentDidMount() {
        const token = localStorage.getItem('token')
        if(token) {
            if(!this.props.token) this.props.setToken(token)
            if(!this.props.user) this.props.fetchUser(token)
            if(this.props.plans.length === 0) this.props.fetchPlans(token)
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <PublicRoute 
                            exact 
                            restricted
                            path="/" 
                            component={Home}/>
                        <PublicRoute
                            restricted 
                            path="/register" 
                            component={Register}/>
                        <PublicRoute
                            restricted 
                            path="/login" 
                            component={Login}/>
                        <PrivateRoute 
                            path="/plan" 
                            component={Plan}/>
                        <PublicRoute 
                            path="/plann" 
                            component={Plan}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {setToken, fetchUser, fetchPlans})(App)