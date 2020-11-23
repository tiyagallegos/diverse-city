import React from 'react';
import syles from './WelcomePage.css'
import { Link } from 'react-router-dom'

const WelcomePage = (props) => {
    return (
        <div className='layout'>
            <div className="choose">
                <Link to='/business'><button>Click here to see our supporting businesses</button></Link>
                <Link to='/user'><button>Click here to sign in and add your input to the community</button></Link>
                <Link to='/investor'><button>Click here to become a sponsor</button></Link>

            </div>
        </div>
    )
}

export default WelcomePage;