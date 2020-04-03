import React, {Component} from 'react'
import {BrowserRouter,Switch ,Route} from 'react-router-dom'
import Layout from './components/Layout'
import {Home, Register, Login, Plan} from './pages'
import {connect} from 'react-redux'
import {fetchUser} from './actions'

class App extends Component {
    state = {
        token: null,
        user: null
    }

    componentDidMount() {
        if(!this.state.user && this.state.token !== null) {
            this.props.fetchUser(this.state.token)
        }
    }

    setToken = (token) => {
        this.setState({ token })
        this.props.fetchUser(token)
    }


    render() {
        console.log(this.props)
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/register" component={() => <Register setToken={this.setToken} />}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/plan" component={Plan}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchUser})(App)