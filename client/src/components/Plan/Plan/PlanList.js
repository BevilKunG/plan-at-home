import React, {Component} from 'react'
import {connect} from 'react-redux'
import PlanCard from './PlanCard'

class PlanList extends Component {
    render() {
        return this.props.plans.map((plan) => (
            <div 
                className="mx-auto my-2"
                key={plan._id}>
                <PlanCard plan={plan} />
            </div>
        ))
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PlanList)