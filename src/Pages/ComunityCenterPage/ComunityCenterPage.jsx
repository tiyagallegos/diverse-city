import React from 'react';
import styles from './InvestorPage';
import { Link } from 'react-router-dom';


function InvestorPage(props) {
    return (
        <div className={styles}>
            <h2>Community Center</h2>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default InvestorPage;