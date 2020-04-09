import React, {Component} from 'react'
import {connect} from 'react-redux'

class ProfileCard extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div className="card my-2">
                <div className="card-body">
                    <div className="row text-center">
                        <div className="col-2"> 
                            <h5>Username</h5>
                        </div>
                        <div className="col-10"> 
                            <h5>{this.props.user.username}</h5>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-2"> 
                            <h5>Email</h5>
                        </div>
                        <div className="col-10"> 
                            <h5>{this.props.user.email}</h5>
                        </div>
                    </div>

                    <div className="text-right">
                        <button className="btn btn-warning">Edit</button>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ProfileCard)