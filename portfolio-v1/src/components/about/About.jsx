import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about-container'>
                <div className='about-me'>
                    <div className='about-me-image'>
                        <img src={ME} alt='About Me Image' />
                    </div>
                </div>

                {/* <div className='about-content'> */}
            </div>
        </section>
    )
}

export default About
