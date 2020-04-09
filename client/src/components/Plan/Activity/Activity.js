import React, {Component} from 'react'

class Activity extends Component {
    render() {
        return (
            <div 
                key={this.props.activity._id}
                className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{this.props.activity.name}</h5>
                    <h5 className="card-subtitle">{this.props.activity.duration}</h5>
                </div>
            </div>
        )
    }
}

export default Activity