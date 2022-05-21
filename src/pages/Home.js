import React from 'react';
import {Parallax} from 'react-parallax';
import { Typography, Button, Container } from '@mui/material';
import {Link} from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import home1 from '../assets/images/homepage/slide6.jpg';
import home2 from '../assets/images/homepage/slide2.jpg';


import AboutUs from '../components/homepage/AboutUs';
import CarouselContainer from '../components/homepage/Carousel';
import SkyEvents from '../components/homepage/SkyEvents';


const imageText = {
  background: 'transparent',
  left: '50%',
  top: '60%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
}


function Home() {
  return (
    <div >
      <CarouselContainer />
      <AboutUs />
      

      <Parallax bgImage={home1} strength={350}>
        <div style={{height: 600}}>
          <div style={imageText}>
            <Typography  style={{color: '#fff'}} variant= "h3" align='center' >
              What's Your Next Destination?
            </Typography>
            <Typography  style={{color: '#fff'}} variant= "h5" align='center' >
              Let us take you there
            </Typography>
            
          </div>
          <Link to='/booking' style={{textDecoration: 'none'}}>
            <Button 
              variant='contained'
              style={{
                backgroundColor: '#726e69c2',
                color: '#fff',
                fontSize: '20px',
                borderRadius: '10px',
                top: '80%' }}
              >
                Make a Reservation
              </Button>
            </Link>
        </div>
      </Parallax>
      <Container maxWidth='md' style={{marginTop: '30px'}}>
        <Typography style={{color: '#333333'}} variant='h4' align='center'>
          Dear friends of SkyAngel
        </Typography>
        <br/>
        <Typography align='center'   style={{color: '#333333', fontSize: '1.1rem'}}>
          It is with an absolute dedication to service, excellence, innovation and a single-minded drive for growth that SkyAngel has approached the last few years of business, and it is this continued focus that has enabled us to build a strategic roadmap that will continue to deliver customer excellence well into the future. We believe that at the heart of the success for SkyAngel Private Jet Charters is our flexibility of solution design, engaged focus on safety and innovation and a drive to delight customers and it is this ethos which will carry us forward into the future.
        </Typography>
        <br/>
        <Typography  style={{color: '#333333', fontSize: '1.1rem'}} align='center'>
          The Sky Is Not The Limit It Is Our Territory. Let Us Claim It together!
        </Typography>
        <br/>
        <Typography  style={{color: '#333333', fontSize: '1.1rem'}} align='center'>
          See you onboard
        </Typography>
        <Typography  style={{color: '#333333', fontSize: '1.1rem'}} align='center'>
          Yours in flight,
        </Typography>
        <Typography  style={{color: '#333333', fontSize: '1.1rem'}} align='center'>
          Nyasha Paradzai
        </Typography>
        <Typography variant='subtitle1' align='center'>
          CEO
        </Typography>
        <br/>
      </Container>
      <Parallax bgImage={home2} strength={400} blur={{min: -90, max: 0}}>
        <div style={{height: 600}}>
          <div style={imageText}>
            <Typography  style={{color: '#fff'}} variant= "h3" align='center' >
              Adventure Awaits!
            </Typography>
            <br/>
            <Typography  style={{color: '#fff'}} variant= "h5" align='center' >
              What are you waiting for?
            </Typography>
            <br/>
            <br/>
            <Link to='/booking' style={{textDecoration: 'none'}}>
              <Button 
              variant='contained'
              style={{
                backgroundColor: '#726e69c2',
                color: '#fff',
                fontSize: '20px',
                borderRadius: '10px' }}
              >
                Get a quote today
              </Button>
            </Link>
            
          </div>
        </div>
      </Parallax>
      <SkyEvents/>
      
    </div>
  )
}

export default Home





