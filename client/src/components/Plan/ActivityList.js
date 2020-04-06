import React, {Component} from 'react'
import {connect} from 'react-redux'

class ActivityList extends Component {
    render() {
        return this.props.activities.map((activity) => (
            <div key={activity._id}>
                <h1>{activity.name}</h1>
                <h3>{activity.duration}</h3>
            </div>
        ))
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ActivityList)