import React from 'react'
import './home.css'
import aboutImg from './img/IMG_20200806_202734_4 (2).jpg'


function Home() {
    return (
        <div className='home'>
            <div className='leftContent'>
                <div className='leftWrapper'>
                    <h1 className='intro'>Hi, My name is</h1>
                    <h2 className='myName'>Edmond  Sadiki</h2>
                    <div className="Titles">
                        <div className="titleWrapper">
                            <div className="titleItem">Web Developer</div>
                            <div className="titleItem">Python Developer</div>
                            <div className="titleItem">Youtuber</div>
                            <div className="titleItem">Content Creator</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rightContent'>
                <div className='leftWrapper'>
                    <div className='imgContent'>
                        <div className="imgline"></div>
                        <img alt='homeimg'className='aboutimg' src={aboutImg}></img>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Home
