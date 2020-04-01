import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div>
            <h1 className="text-center mt-4">Register</h1>
            <form>
                    <div className="form-group row my-5">
                        <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="name" className="form-control" id="inputName"></input>
                        </div>
                    </div>
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
                    <div class="form-group row my-5">
                        <label for="inputComFirm" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputComFirm"></input>
                        </div>
                    </div>
                    <div className="w-100 text-right">
                        <button type="submit" className="btn btn-primary mb-2 mr-2">Submit</button>
                    </div>  
            </form>
        </div>
    )
}

export default Register