import React, {Component} from 'react'
import ActivityList from './ActivityList'
import ActivityForm from './ActivityForm'

class PlanCard extends Component {
    state = {
    }

    
    renderDate() {
        const date = new Date(this.props.plan.date)
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    render() {
        const {plan} = this.props 
        return (
            <div className="card">
                <div className="card-header">
                    <div className="d-flex flex-row justify-content-between">
                        <h3>{plan.name}</h3>
                        <h3>{this.renderDate()}</h3>
                    </div>
                </div>
    
                <div className="card-body">
                    <ActivityList activities={plan.activities}/>
                    <ActivityForm planId={plan._id} />
                </div>
            </div>
        )
    }
}

export default PlanCard