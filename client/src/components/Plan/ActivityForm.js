import React, {Component} from 'react'

class ActivityForm extends Component {
    state = {
        name: '',
        start: '',
        end: ''
    }

    render() {
        console.log(this.state)
        return (
            <form>
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
            </form>
        )
    }
}

export default ActivityForm