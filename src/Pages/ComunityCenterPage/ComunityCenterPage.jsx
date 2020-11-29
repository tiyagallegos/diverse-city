import React from 'react';
import './CommunityCenter.css';
import { Link } from 'react-router-dom';


function InvestorPage(props) {
    return (
        <div className="ccstyles">
            <h2>Community Center</h2>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default InvestorPage;