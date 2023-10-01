import React from 'react'
import { IconBrandLinkedin, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react'

function HeaderSocials() {
    return (
        <div className='header-socials mt'>
            <a href='https://linkedin.com' target='_blank'>
                <IconBrandLinkedin />
            </a>
            <a href='https://github.com' target='_blank'>
                <IconBrandGithub />
            </a>
            <a href='https://twitter.com' target='_blank'>
                <IconBrandTwitter />
            </a>
        </div>
    )
}

export default HeaderSocials
