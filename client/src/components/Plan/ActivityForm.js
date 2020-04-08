import React, {Component} from 'react'

class ActivityForm extends Component {
    state = {
        name: ''
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Name" 
                        onChange={(e) => this.setState({name: e.target.value})} />
                </div>
                <div className="form-row">
                    <div className="col">
                        <div className="form-group">
                            <label>Start</label>
                            <input 
                                type="time" 
                                className="form-control" />
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>End</label>
                            <input 
                                type="time" 
                                className="form-control" />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default ActivityForm