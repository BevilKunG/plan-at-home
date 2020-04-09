import React, {Component} from 'react'
import PlanModal from '../Plan/PlanModal'
import {connect} from 'react-redux'
import {addActivity, deletePlan} from '../../../actions'
import axios from 'axios'
import qs from 'qs'

class ActivityForm extends Component {
    state = {
        name: '',
        start: '',
        end: '',
        formShow: false,
        modalShow: false,
        errorMessage: '',
        nameError: false,
        startError: false,
        endError: false
    }

    clearState = () => {
        this.clearError()
        this.setState({
            name: '',
            start: '',
            end: '',
            formShow: false,
        })
    }

    clearError = () => {
        this.setState({
            errorMessage: '',
            nameError: false,
            startError: false,
            endError: false 
        })
    }

    handleFormShow = (formShow) => {
        if(!formShow) this.clearState()
        this.setState({ formShow })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
    }

    onActivitySubmit = (e) => {
        if(!this.validateActivity()) return 

        const {name, start, end} = this.state
        const duration = `${start}-${end}`
        const activity = {
            name,
            duration
        }

        this.props.addActivity(this.props.plan._id, activity)
        axios.post(`/api/plans/${this.props.plan._id}/activities`, qs.stringify({ activity }))

        this.clearState()
    }

    onPlanDelete = () => {
        this.props.deletePlan(this.props.plan._id)
        axios.delete(`/api/plans/${this.props.plan._id}`)
    }

    validateActivity = () => {
        this.clearError()

        const {name, start, end} = this.state
        if(!/[a-z A-Z 0-9]+/g.test(name)) {
            this.setState({
                errorMessage: 'Invalid name',
                nameError: true
            })
            return false
        }

        if(start.length === 0) {
            this.setState({
                errorMessage: 'Invalid start time',
                startError: true
            })
            return false
        }

        if(end.length === 0) {
            this.setState({
                errorMessage: 'Invalid end time',
                endError: true
            })
            return false
        }
        return true
    }

    hideModal = () => {
        this.setState({ modalShow: false })
    }

    renderAlert() {
        if(!this.state.errorMessage) return null
        return (
            <div className="alert alert-danger">
                {this.state.errorMessage}
            </div>
        )
    }

    renderForm() {
        if(this.state.formShow) {
            return (
                <div>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className={`form-control ${this.state.nameError?'is-invalid':''}`}
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <div className="form-group">
                                <label>Start</label>
                                <input 
                                    type="time" 
                                    className={`form-control ${this.state.startError?'is-invalid':''}`}
                                    value={this.state.start}
                                    onChange={(e) => this.setState({start: e.target.value})} />
                            </div>
                            
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>End</label>
                                <input 
                                    type="time" 
                                    className={`form-control ${this.state.endError?'is-invalid':''}`}
                                    value={this.state.end}
                                    onChange={(e) => this.setState({end: e.target.value})} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }

    renderButton() {
        if(this.state.formShow) {
            return (
                <div className="text-center">
                    <button 
                        className="btn btn-secondary mr-5"
                        onClick={() => this.handleFormShow(false)}>Cancel</button>
                    <button 
                        className="btn btn-primary"
                        onClick={this.onActivitySubmit}>Submit</button>
                </div>
            )
        }
        return (
            <div className="text-right">
                <button 
                    className="btn btn-primary mr-2"
                    onClick={() => this.handleFormShow(true)}>New Activity</button>
                <button 
                    className="btn btn-warning mr-2"
                    onClick={() => this.setState({ modalShow: true })}>Edit Plan</button>
                <button 
                    className="btn btn-danger"
                    onClick={this.onPlanDelete}>Delete Plan</button>
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                {this.renderAlert()}
                {this.renderForm()}
                {this.renderButton()}
                <PlanModal
                    plan={this.props.plan}
                    show={this.state.modalShow}
                    hideModal={this.hideModal} />
            </form>
        )
    }
}

export default connect(null, {addActivity, deletePlan})(ActivityForm)