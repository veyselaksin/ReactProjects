import React from 'react'
import './portfolio.css'
import { PORTFOLIO_PROJECTS } from './constants'

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>Life is a series of projects.</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio-container'>
                {PORTFOLIO_PROJECTS.map((project, index) => (
                    <article className='portfolio-card' key={index}>
                        <div className='portfolio-card-image'>
                            <img src={project.image} alt='Portfolio Card' />
                        </div>
                        <div className='portfolio-card-content'>
                            <h3>{project.title}</h3>
                            <p>{project.content}</p>
                            <div className='portfolio-card-buttons'>
                                <a href={project.projectLink} className='btn btn-primary'>
                                    View Project
                                </a>
                                <a href={project.codeLink} className='btn btn-secondary'>
                                    View Code
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
