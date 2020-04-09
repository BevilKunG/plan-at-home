import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div 
                className="home-background"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/home-background.jpg)`
                }}>    
            </div>
            <div className="brand-box">
                <h1 className="display-1 text-center">Plan At Home</h1>
                <p className="text-center mt-2 definition-text">Stay productive, work from home</p> 
            </div>
        </div>
    )
}

export default Home