import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

import styles from './Footer.css'

export default function Footer() {
    return(
        <footer className="Footer">
            <section> Copyright &copy; {new Date().getFullYear()} </section>
            <section>
                <a className="icons" href="https://github.com/tiyagallegos/" target="_blank"> 
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="icons" href="https://github.com/hnorthcote/" target="_blank"> 
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="icons" href="https://www.linkedin.com/in/tiya-gallegos/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="icons" href="https://www.linkedin.com/in/henry-northcote/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
               
            </section>
        </footer>
    );
}