import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {addPlan, updatePlan} from '../../../actions'
import axios from 'axios'
import qs from 'qs'
import {connect} from 'react-redux'

class PlanModal extends Component {
    state = {
        name: '',
        d: '',
        m: '',
        y: '',
        errorMessage: '',
        nameError: false,
        dError: false,
        mError: false,
        yError: false
    }

    clearState = () => {
        this.clearError()
        this.setState({
            name: '',
            d: '',
            m: '',
            y: ''
        })
    }

    clearError = () => {
        this.setState({
            errorMessage: '',
            nameError: false,
            dError: false,
            mError: false,
            yError: false
        })
    }

    resetState = () => {
        const {name} = this.props.plan
        const date = new Date(this.props.plan.date)
        const d = `${date.getDate()}`
        const m = `${date.getMonth()+1}`
        const y = `${date.getFullYear()}`
        this.clearError()
        this.setState({
            name,
            d,
            m,
            y
        })
    }

    onHide = () => {
        if(!this.props.plan) {
            this.clearState()
        }
        this.props.hideModal()
    }

    validatePlan = () => {
        this.clearError()
        
        const {name, d, m, y} = this.state
        if(!/[a-z A-Z 0-9]+/g.test(name)) {
            this.setState({ 
                errorMessage: 'Invalid name',
                nameError: true
            })
            return false
        }

        if(!/^[0-9]{2}$/g.test(d) || parseInt(d) < 1 || parseInt(d)>31) {
            this.setState({ errorMessage: 
                'Date must be 01-31 (DD)',
                dError: true
            })
            return false
        }

        if(!/^[0-9]{2}$/g.test(m) || parseInt(m) < 1 || parseInt(m)>12) {
            this.setState({ 
                errorMessage: 'Month must be 01-12 (MM)',
                mError: true
            })
            return false
        }

        if(!/^[0-9]+$/g.test(y)) {
            this.setState({ 
                errorMessage: 'Year must be contain digits (YYYY)',
                yError: true
            })
            return false
        }

        return true
    }


    addPlan = () => {
        if(!this.validatePlan()) return
        
        const {name, d, m, y} = this.state
        const date = new Date(`${y}-${m}-${d}`)
        const activities = []
        const plan = {
            name,
            date,
            activities
        }

        this.props.addPlan(plan)
        axios.post('/api/plans', qs.stringify({ plan }))

        this.onHide()
    }

    updatePlan = () => {
        if(!this.validatePlan()) return

        const {name, d, m, y} = this.state
        const date = new Date(`${y}-${m}-${d}`)
        const {activities} = this.props.plan
        const plan = {
            name,
            date,
            activities
        }

        this.props.updatePlan(this.props.plan._id, plan)
        axios.put(`/api/plans/${this.props.plan._id}`, qs.stringify({ plan }))
    }
    

    componentDidMount() {
        if(!this.props.plan) {
            this.clearState()
        } else {
            this.resetState()
        }
    }

    renderButton() {
        if(!this.props.plan) {
            return (
                <button 
                    className="btn btn-primary"
                    onClick={this.addPlan}>Add</button>
            )
        }
        return (
            <button 
                className="btn btn-warning"
                onClick={this.updatePlan}>Update</button>
        )
        
    }

    renderAlert() {
        if(! this.state.errorMessage) return null
        return (
            <div className="alert alert-danger">
                {this.state.errorMessage}
            </div>
        )
    }

    render() {
        return (
            <Modal 
                show={this.props.show}
                onHide={this.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>New Plan</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {this.renderAlert()}
                    <form>
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Name</label>
                            <div className="col-10">
                                <input
                                    type="text"
                                    className={`form-control ${this.state.nameError?'is-invalid':''}`}
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={(e) => this.setState({ name: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-2 col-form-label">Date</label>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className={`form-control ${this.state.dError?'is-invalid':''}`}
                                            placeholder="DD"
                                            value={this.state.d}
                                            onChange={(e) => this.setState({ d: e.target.value })} />
                                    </div>

                                    <div className="col">
                                        <input
                                            type="text"
                                            className={`form-control ${this.state.mError?'is-invalid':''}`}
                                            placeholder="MM"
                                            value={this.state.m}
                                            onChange={(e) => this.setState({ m: e.target.value })} />
                                    </div>

                                    <div className="col">
                                        <input
                                            type="text"
                                            className={`form-control ${this.state.yError?'is-invalid':''}`}
                                            placeholder="YYYY"
                                            value={this.state.y}
                                            onChange={(e) => this.setState({ y: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <button 
                        className="btn btn-secondary"
                        onClick={this.onHide}>Close</button>
                    {this.renderButton()}
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {addPlan, updatePlan})(PlanModal)