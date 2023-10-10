import React from 'react';
import { Link } from 'react-router-dom';
import './Styling/nav.css'
import Auth from '../utils/auth';

  const Sidebar = () => {
  

      if (Auth.loggedIn()) {
        return (
          <div className='nav'>
        <div className='side-bar'>
          <Link className='button' to='/'>
            <span>SPELLBINDER</span>
          </Link>
          <Link className='button' to='/features'>
            <span>FEATURES</span>
          </Link>
          <Link className='button' to='/showcase'>
            <span>SHOWCASE</span>
          </Link>

          <div className='right-bar'>
          <Link className='button-right' to='/profile'>
            <span>PROFILE</span>
          </Link>
          <button className='button-right' onClick={() => Auth.logout()}>LOGOUT</button>
          </div>

        </div>
      </div>

        );
    }

    return (
      <div className='nav'>
        <div className='side-bar'>
          <Link className='button' to='/'>
            <span>SPELLBINDER</span>
          </Link>
          <Link className='button' to='/features'>
            <span>FEATURES</span>
          </Link>
          <Link className='button' to='/showcase'>
            <span>SHOWCASE</span>
          </Link>

          <div className='right-bar'>
          <Link className='button-right' to='/login'>
            <span>LOGIN</span>
          </Link>
          <Link className='button-right' to='/signup'>
            <span>CREATE ACCOUNT</span>
          </Link>
          </div>

        </div>
      </div>
    )
  }
  export default Sidebar;