import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../assets/images/logo.png'

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt='SkyAngel' height='40px'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/fleet'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Fleet
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/management'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Management
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/booking'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Bookings
              </Link>
            </li>
          </ul>
          {button && <Button variant='outlined' color='inherit' style={{backgroundColor: '#e1e1e1', fontSize: '13px', borderRadius: 10 }}>BOOKINGS</Button>}
        </div>
      </nav>
    </>
  );
}

export default Header;