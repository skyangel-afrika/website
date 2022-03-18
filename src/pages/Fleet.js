import React from 'react';
import {Typography, Container} from '@mui/material';

import FtoP from '../components/fleet/FtoP';
import BeechcraftChallenger from '../components/fleet/BeechcraftChallenger';
import TheRest from '../components/fleet/TheRest';

function Fleet() {
  return (
    <div> 
      <Container maxWidth='lg' style={{marginTop: '30px'}}>
        <Typography variant='h4' align='center' style={{color: '#333333'}}>
          Our Fleet
        </Typography>
        <FtoP style={{marginTop: '20px'}}/>
        <BeechcraftChallenger/>
        <TheRest/>
      </Container>
    </div>
  )
}

export default Fleet