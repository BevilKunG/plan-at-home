import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PlanList} from '../../components/Plan'
import {fetchPlans} from '../../actions/index'

class Plan extends Component {
    componentDidMount() {
        this.props.fetchPlans()
    }

    render() {
        return (
            <div>
                <PlanList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchPlans})(Plan)