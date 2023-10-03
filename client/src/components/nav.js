import React from 'react';
import { Link } from 'react-router-dom';
import './Styling/nav.css'

  const Sidebar = () => {
  
    return (
      <div className='nav'>
        <div className='side-bar'>
          <Link className='button' to='/'>
            <span>HOME</span>
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