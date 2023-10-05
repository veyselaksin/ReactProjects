import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
// import { IconAward } from '@tabler/icons-react'
import { ABOUT_CONTENT_CARDS } from './constants'

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

                <div className='about-content'>
                    <div className='about-cards'>
                        {ABOUT_CONTENT_CARDS.map((card, index) => (
                            <article className='about-card'>
                                {card.icon}
                                <h5>{card.title}</h5>
                                <small>{card.content}</small>
                            </article>
                        ))}
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptate necessitatibus asperiores quos corporis maxime voluptatem tempore esse deserunt
                        aperiam optio, quas, deleniti repudiandae itaque hic similique repellendus at repellat.
                    </p>

                    <a href='#contact' className='btn btn-primary'>
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
