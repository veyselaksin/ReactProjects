import { IconAward, IconCode, IconUser } from '@tabler/icons-react'

const ABOUT_CONTENT_CARDS = [
    {
        title: 'Experience',
        content: '2+ Years Working',
        icon: <IconAward className='about-icon' />
    },
    {
        title: 'Projects',
        content: '10+ Projects',
        icon: <IconCode className='about-icon' />
    },
    {
        title: 'Clients',
        content: '5+ Clients',
        icon: <IconUser className='about-icon' />
    }
]

export { ABOUT_CONTENT_CARDS }
