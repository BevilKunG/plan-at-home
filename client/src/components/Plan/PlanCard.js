import React, {Component} from 'react'
import ActivityList from './ActivityList'
import ActivityForm from './ActivityForm'

class PlanCard extends Component {
    state = {
        showForm: false
    }

    renderForm() {
        if(this.state.showForm) {
            return (
                <ActivityForm />
            )
        }
        return null
    }

    renderAddButton() {
        if(this.state.showForm) {
            return (
                <div className="text-center">
                    <button 
                        className="btn btn-secondary mr-5"
                        onClick={() => this.setState({showForm: false})}>Cancel</button>
                    <button 
                        className="btn btn-primary"
                        >Submit</button>
                </div>
            )
        }
        return (
            <div className="text-center">
                <button 
                    className="btn btn-primary"
                    onClick={() => this.setState({showForm: true})}>Add Activity</button>
            </div>
        )
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
                    {this.renderForm()}
                    {this.renderAddButton()}
                </div>
            </div>
        )
    }
}

export default PlanCard