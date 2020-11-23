import React from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom'

const WelcomePage = (props) => {
    return (
        <div className='layout'>
            <div className="directory-buttons">
                <Link  to='/business'><button className="choose">Business</button></Link>
                <Link  to='/user'><button className="choose">Community</button></Link>
                <Link  to='/investor'><button className="choose">Investor</button></Link>

            </div>
        </div>
    )
}

export default WelcomePage;