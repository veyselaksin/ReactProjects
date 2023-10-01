import React, { useState, useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
    const [loop, setLoop] = useState(0)
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Go Developer', 'Backend Developer', 'Software Engineer', 'Full Stack Developer', 'Freelancer']
    const [delta, setDelta] = useState(300 - Math.random())
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            handleRotate()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const handleRotate = () => {
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let utext = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(utext)

        if (isDeleting) {
            setDelta(delta => delta / 2)
        }

        if (!isDeleting && utext === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && utext === '') {
            setIsDeleting(false)
            setLoop(loop + 1)
            setDelta(500)
        }
    }
    return (
        <header>
            <div className='container header-container'>
                <h5>Hello From Turkey 🇹🇷</h5>
                <h1>Veysel Aksin</h1>
                <h5 className='text-light'>
                    I'm a <span className='txt-rotate'>{text}</span>
                </h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={me} alt='Veysel Aksin' />
                </div>
                <a href='#contact' className='scroll-down'>
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Header
