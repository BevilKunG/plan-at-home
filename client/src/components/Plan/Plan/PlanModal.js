import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {addPlan} from '../../../actions'
import axios from 'axios'
import qs from 'qs'
import {connect} from 'react-redux'

class PlanModal extends Component {
    state = {
        name: '',
        d: '',
        m: '',
        y: ''
    }

    clearState = () => {
        this.setState({
            name: '',
            d: '',
            m: '',
            y: ''
        })
    }

    onHide = () => {
        this.clearState()
        this.props.hideModal()
    }


    addPlan = () => {
        const {name, d, m, y} = this.state
        const date = new Date(`${y}-${m}-${d}`)
        const activities = []
        const plan = {
            name,
            date,
            activities
        }

        this.props.addPlan(plan)
        axios.post('/api/plans', qs.stringify(plan))

        this.onHide()
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
                    <form>
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Name</label>
                            <div className="col-10">
                                <input
                                    type="text"
                                    className="form-control"
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
                                            className="form-control"
                                            placeholder="DD"
                                            value={this.state.d}
                                            onChange={(e) => this.setState({ d: e.target.value })} />
                                    </div>

                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="MM"
                                            value={this.state.m}
                                            onChange={(e) => this.setState({ m: e.target.value })} />
                                    </div>

                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
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
                    <button 
                        className="btn btn-primary"
                        onClick={this.addPlan}>Add</button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {addPlan})(PlanModal)