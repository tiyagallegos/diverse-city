import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
    <nav className="nav">
      <div className="NavContainer">
    <div className='NavBar'>
        <Link to="/" className="title">Diverse City</Link>
        {props.user ?
        <div>
          <span className="NavBar-welcome">Welcome, <strong>{props.user.name}</strong>!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="" onClick={props.handleLogout} className="NavBar-link">LOG OUT</Link>
         
          </div>  
        :
        <div>
          <Link to="/login" className='NavBar-link'>LOG IN</Link>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
        </div>    
      }
      </div>
      </div>
      <div className="">
          <Link className="mainPageLinks" to='/about' >About Us</Link> 
          
          <Link  className="mainPageLinks" to='/'>Invest</Link>
          
          <Link className="mainPageLinks" to="/">Outreach</Link>
          
          <Link className="mainPageLinks" to="/">Resources</Link>
          </div>
  
          <div className="menu-btn">
              <div className="menu-btn-burger"></div>
          </div>
      </nav>
      
    );
  };
  
  export default NavBar;
  