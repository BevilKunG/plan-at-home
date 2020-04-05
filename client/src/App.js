import React, {Component} from 'react'
import {BrowserRouter,Switch ,Route} from 'react-router-dom'
import Layout from './components/Layout'
import {Home, Register, Login, Plan} from './pages'
import {PublicRoute, PrivateRoute} from './components/Route'
import {connect} from 'react-redux'
import {setToken, fetchUser} from './actions'

class App extends Component {
    componentDidMount() {
        const token = localStorage.getItem('token')
        if(token) {
            this.props.setToken(token)
            this.props.fetchUser(token)
        }
    }

    render() {
        console.log(this.props)
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
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {setToken, fetchUser})(App)