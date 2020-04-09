import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PlanList, PlanModal} from '../../components/Plan'
import {fetchPlans} from '../../actions/index'

class Plan extends Component {
    state={
        modalShow: false
    }

    hideModal = () => {
        this.setState({ modalShow: false })
    }

    render() {
        return (
            <div>
                <div className="text-right mt-2">
                    <button 
                        className="btn btn-primary"
                        onClick={() => this.setState({ modalShow: true })}>Add Plan</button>
                </div>
                <PlanList />
                <PlanModal 
                    show={this.state.modalShow}
                    hideModal={this.hideModal} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchPlans})(Plan)