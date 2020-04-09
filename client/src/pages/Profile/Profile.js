import React, {Component} from 'react'
import {ProfileCard, ProfileModal} from '../../components/Profile'

class Profile extends Component {
    state = {
        modalShow: false
    }

    showModal = () => {
        this.setState({ modalShow: true })
    }

    hideModal = () => {
        this.setState({ modalShow: false })
    }

    render() {
        return (
            <div>
                <div>
                    <ProfileCard showModal={this.showModal} />
                    <ProfileModal 
                        show={this.state.modalShow}
                        hideModal={this.hideModal} />
                </div>
            </div>
        )
    }
}

export default Profile