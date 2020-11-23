import React from 'react';
import './InvestorPage.css';
import { Link } from 'react-router-dom';


function InvestorPage(props) {
    return (
        <div className="investor-page">
            <h2>This is the Investors Page</h2>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default InvestorPage;