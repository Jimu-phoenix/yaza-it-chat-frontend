import '../styles/Socials.css'
import { SocialIcon } from 'react-social-icons'
export default function Socials(){
    return(
        <aside className='social-links'>
        
            <SocialIcon url='https://twitter.com' className='social'></SocialIcon>
            <SocialIcon url='https://facebook.com' className='social'></SocialIcon>
            <SocialIcon url='https://instagram.com' className='social'></SocialIcon>

        </aside>
    )
}