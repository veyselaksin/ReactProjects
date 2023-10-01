import React from 'react'
import resume from '../../assets/cv.pdf'

function CTA() {
    return (
        <div className='cta'>
            <a href={resume} download className='btn'>
                Download Resume
            </a>
            <a href='#contact' className='btn btn-primary'>
                Contact Me
            </a>
        </div>
    )
}

export default CTA
