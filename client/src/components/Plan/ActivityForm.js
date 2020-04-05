import React, {Component} from 'react'

class ActivityForm extends Component {
    state = {
        name: ''
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Name" 
                        onChange={(e) => this.setState({name: e.target.value})} />
                </div>
            </form>
        )
    }
}

export default ActivityForm