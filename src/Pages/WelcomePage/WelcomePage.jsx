import React from 'react';
import syles from './WelcomePage.css'
import { Link } from 'react-router-dom'

const WelcomePage = (props) => {
    return (
        <div className='layout'>
            <Link to='/signup'><button>Signup</button></Link>
            <div className='intro'>
                <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Labore laboriosam iure dicta id ipsa, ipsum, in beatae, excepturi quidem perferendis 
                    error cupiditate quam! Culpa quaerat obcaecati nihil quas exercitationem eum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, quia veritatis! Deleniti, voluptas, amet molestias hic velit dolore modi dolor quia consequatur quod maxime.
                    At atque accusantium quidem nisi sunt.
                </h5>
            </div>
            <div className="choose">
                <Link to='/business'><button>Click here to see our supporting businesses</button></Link>
                <Link to='/user'><button>Click here to sign in and add your input to the community</button></Link>
                <Link to='/investor'><button>Click here to become a sponsor</button></Link>

            </div>
        </div>
    )
}

export default WelcomePage;