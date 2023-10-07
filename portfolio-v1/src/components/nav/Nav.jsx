import React, { useState } from 'react'
import './nav.css'
import { IconHome2, IconUser, IconCode, IconMessage2, IconStars } from '@tabler/icons-react'

function Nav() {
    const [active, setActive] = useState('#')

    return (
        <nav>
            <a href='#' onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}>
                <IconHome2 />
            </a>
            <a href='#about' onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}>
                <IconUser />
            </a>
            <a href='#portfolio' onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}>
                <IconCode />
            </a>
            <a href='#experience' onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}>
                <IconStars />
            </a>
            <a href='#contact' onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}>
                <IconMessage2 />
            </a>
        </nav>
    )
}

export default Nav
