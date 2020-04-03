import React, {Component} from 'react'
import axios from 'axios'
import qs from 'qs'
import './Login.css'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        axios.post('/api/login', qs.stringify({
            email,
            password
        })).then((res) => {
            this.props.setToken(res.data.token)
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-center mt-4">Login</h1>
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group row my-5">
                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="inputEmail"
                                    onChange={(e) => this.setState({email: e.target.value})}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row my-5">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="inputPassword"
                                    onChange={(e) => this.setState({password: e.target.value})}>
                                </input>
                            </div>
                        </div>
                        <div className="w-100 text-right">
                            <button type="submit" className="btn btn-primary mb-2 mr-2">Submit</button>
                        </div>
                    </form>
            </div>
        )
    }
}

export default Login