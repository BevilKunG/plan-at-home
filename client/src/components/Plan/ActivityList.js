import React, {Component} from 'react'
import {connect} from 'react-redux'

class ActivityList extends Component {
    render() {
        return this.props.activities.map((activity) => (
            <div 
                key={activity._id}
                className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{activity.name}</h5>
                    <h5 className="card-subtitle">{activity.duration}</h5>
                </div>
            </div>
        ))
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ActivityList)