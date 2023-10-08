import React from 'react'
import './contact.css'
import { CONTACT_DATA } from './constants'

function Contact() {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

            <div className='container contact-container'>
                <div className='contact-options'>
                    {CONTACT_DATA.map((contact, index) => (
                        <article className='contact-option' key={index}>
                            {contact.icon}
                            <h4>{contact.title}</h4>
                            <h5>{contact.value}</h5>
                            <a href='#' target='_blank'>
                                Send me a message
                            </a>
                        </article>
                    ))}
                </div>

                <form action='#'>
                    <input type='text' placeholder='Full Name' required />
                    <input type='email' placeholder='Email' required />
                    <input type='text' placeholder='Subject' required />
                    <textarea placeholder='Message' rows={7} required />
                    <button type='submit' className='btn btn-primary'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
