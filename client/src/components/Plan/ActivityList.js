import React, {Component} from 'react'
import {connect} from 'react-redux'

class ActivityList extends Component {
    renderActivity() {
        
    }

    render() {
        <div>
            {this.renderActivity()}
        </div>
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ActivityList)