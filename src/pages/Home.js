import React from 'react';
import {Parallax} from 'react-parallax';
import { Typography, Button } from '@mui/material';

import home1 from '../assets/images/homepage/2.jpg';
import home2 from '../assets/images/homepage/3.jpg';
import home3 from '../assets/images/homepage/1.jpg';


import AboutUs from '../components/homepage/AboutUs';
import Services from '../components/homepage/Services';

const imageText = {
  background: 'rgba(150, 75, 0, 0.8)',
  left: '50%',
  top: '60%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
}


function Home() {
  return (
    <div>
      <Parallax bgImage={home1} strength={500}>
        <div style={{height: 600}}>
          <div style={imageText}>
            <Typography  style={{color: '#e1e1e1'}} variant= "h2" align='center' >
              Adventure Awaits!
            </Typography>
            <Typography style={{color: '#e1e1e1'}} variant= "h6" align='center' >
              What are you waiting for?
            </Typography>
          </div>
        </div>
      </Parallax>
      <AboutUs/>
      <Parallax bgImage={home2} strength={700}>
        <div style={{height: 600}}>
          <div style={imageText}>
            <Typography  style={{color: '#e1e1e1'}} variant= "h4" align='center' >
              The sky is not the limit
            </Typography>
            <Typography style={{color: '#e1e1e1'}} variant= "h6" align='center' >
              It's our territory
            </Typography>
          </div>
        </div>
      </Parallax>
      <Services/>

      <Parallax bgImage={home3} strength={300}>
        <div style={{height: 600}}>
          <div style={imageText}>
            <Typography  style={{color: '#e1e1e1'}} variant= "h4" align='center' >
              What's Your Next Destination?
            </Typography>
            <Typography  style={{color: '#e1e1e1'}} variant= "h6" align='center' >
              Let us take you there
            </Typography>
            
          </div>
          <Button 
            variant='outlined'
            style={{
              backgroundColor: 'rgba(150, 75, 0, 0.8)',
              color: '#e1e1e1',
              fontSize: '20px',
              borderRadius: '10px',
              top: '80%' }}
            >
              Make a Booking
            </Button>
        </div>
      </Parallax>

      
    </div>
  )
}

export default Home