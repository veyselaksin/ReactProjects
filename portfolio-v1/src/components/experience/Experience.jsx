import React from 'react'
import './experience.css'
import { IconRosetteFilled } from '@tabler/icons-react'
import { FRONTEND_EXPERIENCE_SKILLS, BACKEND_EXPERIENCE_SKILLS } from './constants'

function Experience() {
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>
            <div className='container experience-cards'>
                <div className='experience-card'>
                    <h3>Frontend Development</h3>
                    <ul className='skill-list'>
                        {FRONTEND_EXPERIENCE_SKILLS.map((skill, index) => (
                            <li key={index}>
                                <IconRosetteFilled className='skill-icon' />
                                <span className='card-content'>
                                    <h3>{skill.title}</h3>
                                    <small>{skill.experienceLevel}</small>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='experience-card'>
                    <h3>Backend Development</h3>
                    <ul className='skill-list'>
                        {BACKEND_EXPERIENCE_SKILLS.map((skill, index) => (
                            <li key={index}>
                                <IconRosetteFilled className='skill-icon' />
                                <span className='card-content'>
                                    <h3>{skill.title}</h3>
                                    <small>{skill.experienceLevel}</small>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience
