import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchUser} from '../../actions/index'
import axios from 'axios'
import qs from 'qs'

class ProfileModal extends Component {
    state = {
        name: '',
        errorMessage: '',
        nameError: false
    }

    clearError = () => {
        this.setState({
            errorMessage: '',
            nameError: false,
        })
    }

    resetState = () => {
        const {username} = this.props.user
        this.clearError()
        this.setState({
            name: username
        })
    }

    onHide = () => {
        this.props.hideModal()
    }

    validateProfile = () => {
        this.clearError()

        const {name} = this.state

        if(!/[a-z A-Z 0-9]+/g.test(name)) {
            this.setState({ 
                errorMessage: 'Invalid name',
                nameError: true
            })
            return false
        }

        return true
    }

    updateUser = async () => {
        if(!this.validateProfile()) return

        const user = this.props.user
        user.username = this.state.name

        const res = await axios.put(`/api/user/${this.props.user._id}`, qs.stringify({ user }))
        this.props.fetchUser(this.props.token)

        this.onHide()
    }

    componentDidMount() {
        this.resetState()
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
                    <Modal.Title>Update Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        {this.renderAlert()}
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
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <button 
                        className="btn btn-secondary"
                        onClick={this.onHide}>Close</button>
                    <button 
                        className="btn btn-warning"
                        onClick={this.updateUser}>Update</button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchUser})(ProfileModal)