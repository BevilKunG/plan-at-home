import React from 'react'

const Login = () => {
    return (
        <div>
            <h1 align="center">Login</h1>
                <form>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail"></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword"></input>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </form>
        </div>
    )
}

export default Login