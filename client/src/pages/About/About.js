import React from 'react'
import './About.css'

const About = () => {
    return (
        <div>
            <div>
                <h1>About</h1>
                <p className="about text-center mt-5">
                    Plan At Home is web application for planning your activity,<br/>
                    wherever you are, even your home. Stay productive, work from home
                </p>
            </div>
            
            <div className="mt-5">
                <h1>Developers</h1>
                <div className="developers text-center mt-5">
                    <p>
                        <span className="mr-5">Parinya Pradit</span>
                        <span>610610598</span>
                    </p>
                    <p>
                        <span className="mr-5">Parinya Pradit</span>
                        <span>610610600</span>
                    </p>
                    <p>
                        <span className="mr-5">Parinya Pradit</span>
                        <span>610610602</span>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About