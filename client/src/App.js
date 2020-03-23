import React from 'react'
import {BrowserRouter,Switch ,Route} from 'react-router-dom'
import Layout from './components/Layout'
import {Home, Register, Login} from './pages'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App