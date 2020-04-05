import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setToken, setUser} from '../actions'

class Navbar extends Component {
    logout = () => {
        this.props.setToken(null)
        this.props.setUser(null)
    }

    renderAuthButton() {
        if(!this.props.user) {
            return (
                <div>
                    <Link 
                        className="btn btn-outline-light mr-2" 
                        to="/register">Register</Link>
                    <Link 
                        className="btn btn-outline-light mr-2" 
                        to="/login">Login</Link>
                </div>
            )
        }

        return (
            <div>
                    <button 
                        className="btn btn-outline-light mr-2" 
                        onClick={this.logout}>Logout</button>
            </div>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <Link 
                    className="navbar-brand mb-0 h1" 
                    to="/">Plan At Home</Link>
                {this.renderAuthButton()}
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {setToken, setUser})(Navbar)