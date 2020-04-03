import React, {Component} from 'react'
import {BrowserRouter,Switch ,Route} from 'react-router-dom'
import Layout from './components/Layout'
import {Home, Register, Login} from './pages'
import axios from 'axios'

class App extends Component {
    state = {
        token: null,
        user: null
    }

    componentDidMount() {
        if(!this.state.user && this.state.token !== null) {
            this.fetchUser(this.state.token)
        }
    }

    setToken = (token) => {
        this.setState({ token })
        this.fetchUser(token)
    }

    fetchUser = (token) => {
        axios.get('/api/user', {
            headers: {
                token
            }
        }).then((res) => {
            const {user} = res.data
            this.setState({ user })
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/register" component={() => <Register setToken={this.setToken} />}/>
                        <Route path="/login" component={() => <Login setToken={this.setToken} />}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App