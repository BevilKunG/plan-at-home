import React from 'react'
import {connect} from 'react-redux'
import {PlanList} from '../../components/Plan'

const Plan = (props) => {
    return (
        <div>
            <PlanList />
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Plan)