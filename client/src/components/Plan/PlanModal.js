import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'

class PlanModal extends Component {
    render() {
        return (
            <Modal 
                show={this.props.show}
                onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Plan</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>Plan Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Plan Name" />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <button 
                        className="btn btn-secondary"
                        onClick={this.props.hideModal}>Close</button>
                    <button className="btn btn-primary">Add</button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PlanModal