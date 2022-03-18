import React from 'react';
import { Carousel } from 'react-carousel-minimal';


import slide1 from '../../assets/images/homepage/slide1.jpg';
import slide2 from '../../assets/images/homepage/slide2.jpg';
import slide3 from '../../assets/images/homepage/slide3.jpg';
import slide4 from '../../assets/images/homepage/slide4.jpg';



export default function CarouselContainer () {
  const data =[
    {
      image: slide1,
      caption: 'The Ultimate Travelling Experience'
    },
    {
      image: slide2,
      caption: 'The Idyllic Way to Reach Your Destination'
    },
    {
      image: slide3,
      caption: 'Put your worries aside, let our family serve you'
    },
    {
      image: slide4,
      caption: 'Join us! Come on board.'
    },
  ];

  const captionStyle = {
    fontSize: '4em',
    fontWeight: 'bold',
  }
    return (
      <div>
        <Carousel
          data={data}
          time={5000}
          width='1350px'
          height='600px'
          captionStyle={captionStyle}
          radius='10px'
          captionPosition='bottom'
          automatic= {true}
          dots={true}
          style={{
            textAlign: 'center',
            maxWidth: '1350px',
            maxHeight: '600px',
            margin: 'auto',
          }}
        />
      </div>
    );
  }
