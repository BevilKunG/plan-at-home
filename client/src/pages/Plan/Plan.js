import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PlanList, PlanModal} from '../../components/Plan'
import {fetchPlans} from '../../actions/index'

class Plan extends Component {
    state={
        showModal: false
    }

    componentDidMount() {
        this.props.fetchPlans()
    }

    hideModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div>
                <div className="text-right mt-2">
                    <button 
                        className="btn btn-primary"
                        onClick={() => this.setState({ showModal: true })}>Add Plan</button>
                </div>
                <PlanList />
                <PlanModal 
                    show={this.state.showModal}
                    hideModal={this.hideModal} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchPlans})(Plan)