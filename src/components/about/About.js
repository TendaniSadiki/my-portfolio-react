import React from 'react'
import './about.css'
import aboutImg from './img/IMG_20200806_202734_4 (1).jpg'

function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <br></br>
            <div className='imgContent'>
                    <img alt='homeimg'className='aboutimg' src={aboutImg}></img>
            </div>
                <div className='aboutmeContent'>
                    <p>I'm Edmond Tendani Sadiki</p>
                </div>

        </div>
    )
}

export default About
