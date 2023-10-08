import React from 'react'
import './services.css'
import { IconCheck } from '@tabler/icons-react'

function Services() {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className='container service-container'>
                <article className='service'>
                    <div className='service-head'>
                        <h3>Web Design</h3>
                    </div>
                    <ul className='service-list'>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service-head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service-list'>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service-head'>
                        <h3>Freelance</h3>
                    </div>
                    <ul className='service-list'>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
