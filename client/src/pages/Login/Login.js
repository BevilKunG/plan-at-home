import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div>
            <h1 className="text-center mt-4">Login</h1>
                <form>
                    <div className="form-group row my-5">
                        <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail"></input>
                        </div>
                    </div>
                    <div className="form-group row my-5">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword"></input>
                        </div>
                    </div>
                    <div className="w-100 text-right">
                        <button type="submit" className="btn btn-primary mb-2 mr-2">Submit</button>
                    </div>
                </form>
        </div>
    )
}

export default Login