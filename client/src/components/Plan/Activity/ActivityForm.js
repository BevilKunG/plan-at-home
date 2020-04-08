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
        modalShow: false
    }

    clearState = () => {
        this.setState({
            name: '',
            start: '',
            end: '',
            formShow: false,
        })
    }

    handleFormShow = (formShow) => {
        this.setState({ formShow })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
    }

    onActivitySubmit = (e) => {
        const {name, start, end} = this.state
        const duration = `${start}-${end}`
        const activity = {
            name,
            duration
        }

        this.props.addActivity(activity, this.props.plan._id)
        axios.post(`/api/plans/${this.props.plan._id}/activities`, qs.stringify({ activity }))

        this.clearState()
    }

    onPlanDelete = () => {
        this.props.deletePlan(this.props.plan._id)
        axios.delete(`/api/plans/${this.props.plan._id}`)
    }

    hideModal = () => {
        this.setState({ modalShow: false })
    }

    renderForm() {
        if(this.state.formShow) {
            return (
                <div>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control"
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
                                    className="form-control"
                                    value={this.state.start}
                                    onChange={(e) => this.setState({start: e.target.value})} />
                            </div>
                            
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>End</label>
                                <input 
                                    type="time" 
                                    className="form-control"
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