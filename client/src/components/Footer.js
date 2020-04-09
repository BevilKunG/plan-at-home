import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <nav 
                className="navbar navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link 
                            className="nav-link"
                            to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default Footer