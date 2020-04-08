import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'

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
                    <button className="btn btn-primary">Add</button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PlanModal