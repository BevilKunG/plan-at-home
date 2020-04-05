import React, {Component} from 'react'
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
                        className="btn btn-primary mr-5"
                        >Submit</button>
                    <button 
                        className="btn btn-secondary"
                        onClick={() => this.setState({showForm: false})}>Cancel</button>
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

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <div className="d-flex flex-row justify-content-between">
                        <h3 className="">Plan</h3>
                        <div className="">
                            <h3>05/04/2020</h3>
                        </div>
                    </div>
                </div>
    
                <div className="card-body">
                    {this.renderForm()}
                    {this.renderAddButton()}
                </div>
            </div>
        )
    }
}

export default PlanCard