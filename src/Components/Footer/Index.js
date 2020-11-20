import React from 'react'   
// import styles from './Footer.module.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faLinkedin, faLine } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={""}>
            <section>
                Copyright &copy; {new Date().getFullYear()}            
            </section>
            {/* <section>
            <Link href="https://github.com">
                <FontAwesomeIcon icon={faGithub} /></Link>
                <Link href="htpps://Linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link href="htpps://Linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} /></Link> 
            </section>*/}
        </footer>
    )
}
