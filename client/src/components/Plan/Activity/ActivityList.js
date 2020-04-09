import React, {Component} from 'react'
import {connect} from 'react-redux'
import Activity from './Activity'

class ActivityList extends Component {
    render() {
        return this.props.activities.map((activity) => (
            <Activity activity={activity} />
        ))
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ActivityList)