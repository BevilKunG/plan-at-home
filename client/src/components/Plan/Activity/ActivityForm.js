import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addActivity} from '../../../actions'

class ActivityForm extends Component {
    state = {
        name: '',
        start: '',
        end: '',
        formShow: false,
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
        this.props.addActivity(activity, this.props.planId)
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
            <div className="text-center">
                <button 
                    className="btn btn-primary"
                    onClick={() => this.handleFormShow(true)}>Add Activity</button>
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                {this.renderForm()}
                {this.renderButton()}
            </form>
        )
    }
}

export default connect(null, {addActivity})(ActivityForm)