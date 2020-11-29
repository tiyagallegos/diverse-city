import React from 'react';
import styles from './UserDetailsPage';
import { Link } from 'react-router-dom';


function UserDetailsPage(props) {
    return (
        <div className={styles}>
            <h2>This is the User details Page</h2>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default UserDetailsPage;