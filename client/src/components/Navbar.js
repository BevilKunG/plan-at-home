import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Link 
                className="navbar-brand mb-0 h1" 
                to="/">Plan At Home</Link>
            <div>
                <Link 
                    className="btn btn-outline-light mr-2" 
                    to="/register">Register</Link>
                <Link 
                    className="btn btn-outline-light mr-2" 
                    to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar