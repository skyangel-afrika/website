import React from 'react';
import './Footer.css';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <Typography variant='h4' align='center' style={{color: '#fff'}}>
          SkyAngel Private Jet Charters
        </Typography>
        <Typography variant='subtitle1' align='center'  style={{color: '#fff'}} component='p' >
          {'All Rights Reserved ©'}  {new Date().getFullYear()}
        </Typography>
        <Typography variant='subtitle1' align='center'  style={{color: '#fff'}} component='p'>
          (Terms and Conditions Apply)
        </Typography>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={logo} height='40px' alt='SkyAngel Private Jet Charters'/>
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/skyangel_afrika-103336232314323'
              rel="noreferrer"
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              rel="noreferrer"
              href='https://www.instagram.com/skyangel_afrika/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href= 'https://www.twitter.com/skyangel_afrika/'
              target='_blank'
              rel="noreferrer"
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://za.linkedin.com/in/skyangel-private-charters-61b820226?trk=people_directory'
              rel="noreferrer"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;