import React from 'react'
import './about.css'

function About() {
    return (
        <div className='about'>
            <h1>Little about Me</h1>
            <br></br>
            
            <div className='aboutmeContentLeft'>
            <div className='aboutmeContentLeftWrapper'>
                    <h1 className='intro'>Hi, My name is</h1>
                    <h2 className='myName'>Edmond  Sadiki</h2>
                    <div className="aboutmeContentTitles">
                        <div className="aboutmeContentTitleWrapper">
                            <div className="aboutmeContentTitleItem">Web Developer</div>
                            <div className="aboutmeContentTitleItem">Python Developer</div>
                            <div className="aboutmeContentTitleItem">Youtuber</div>
                            <div className="aboutmeContentTitleItem">Content Creator</div>
                        </div>
                    </div>
            </div>
            </div>

        </div>
    )
}

export default About
