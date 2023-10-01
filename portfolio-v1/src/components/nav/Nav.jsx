import React from 'react'
import './nav.css'
import { IconHome2, IconUser, IconCode, IconMessage2, IconStars } from '@tabler/icons-react'

function Nav() {
    return (
        <nav>
            <a href='#home' className='active'>
                <IconHome2 />
            </a>
            <a href='#about'>
                <IconUser />
            </a>
            <a href='#portfolio'>
                <IconCode />
            </a>
            <a href='#experience'>
                <IconStars />
            </a>
            <a href='#contact'>
                <IconMessage2 />
            </a>
        </nav>
    )
}

export default Nav
