import React from 'react'
import homeBackgroundImg from './home-background.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <img 
                src={homeBackgroundImg}
                className="home-background" />
            <div className="brand-box">
                <h1 className="display-1 text-center">Plan At Home</h1>
                <p className="text-center mt-2 definition-text">Stay productive, work from home</p> 
            </div>
        </div>
    )
}

export default Home