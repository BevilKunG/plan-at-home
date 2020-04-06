import React from 'react'
import {connect} from 'react-redux'
import {PlanCard} from '../../components/Plan'

const Plan = (props) => {
    console.log(props.plans)
    return (
        <div>
            <div className="mx-auto my-2">
                <PlanCard />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Plan)