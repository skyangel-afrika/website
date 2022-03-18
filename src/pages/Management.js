import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {CardContent, CardMedia, Typography, Container, Grid }from '@mui/material';

import background from '../assets/images/homepage/slide8.jpg';
import nyasha from '../assets/images/team/nyasha.jpg';

export default function Management() {

  return (
    <div style={{marginTop: '-60px', backgroundImage: `url(${background})`}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <Typography variant='h3' align='center' style={{marginBottom: '20px'}} >
          Our Team 
        </Typography>
        <Container maxWidth='lg'>
          <Grid container spacing={5} padding='40px, 0'  alignItems='stretch' justifyContent='center'>
            <Grid item xs={9.4} sm={4} md={4} lg={3}>
              <Card sx={{ justifyContent: 'center', backgroundColor: '#0000ff00', height: '250px'}} >
                <CardMedia
                  component="img"
                  sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                  image={nyasha}
                  alt="Nyasha Paradzai"
                /> 
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={7}>
              <Card sx={{backgroundColor: '#e1e1e1', height: '250px'}}> 
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '0 0 auto' }}>
                    <br/>
                    <br/>
                    <Typography component="div" variant="h5">
                      Nyasha Paradzai
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      CEO
                    </Typography>
                    <hr/>
                    <Typography variant="body2" color="text.secondary" component="div">
                      this is a sample description and mini bio statement about the member of the team. It must be short and precise. 
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={9.4} sm={4} md={4} lg={3}>
              <Card sx={{ justifyContent: 'center', backgroundColor: '#0000ff00', height: '250px'}} >
                <CardMedia
                  component="img"
                  sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                  image={nyasha}
                  alt="Desmond Chideme"
                /> 
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={7}>
              <Card sx={{backgroundColor: '#e1e1e1' , height: '250px'}}> 
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '0 0 auto' }}>
                    <br/>
                    <br/>
                    <Typography component="div" variant="h5">
                      Desmond Chideme
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Director
                    </Typography>
                    <hr/>
                    <Typography variant="body2" color="text.secondary" component="div">
                      this is a sample description and mini bio statement about the member of the team. It must be short and precise. 
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={9.4} sm={4} md={4} lg={3}>
              <Card sx={{ justifyContent: 'center', backgroundColor: '#0000ff00', height: '250px'}} >
                <CardMedia
                  component="img"
                  sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                  image={nyasha}
                  alt="Mudiwa Hood"
                /> 
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={7}>
              <Card sx={{backgroundColor: '#e1e1e1', height: '250px' }}> 
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '0 0 auto' }}>
                    <br/>
                    <br/>
                    <Typography component="div" variant="h5">
                      Mudiwa Hood
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Director
                    </Typography>
                    <hr/>
                    <Typography variant="body2" color="text.secondary" component="div">
                      this is a sample description and mini bio statement about the member of the team. It must be short and precise. 
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      <br/>
      <br/>
    </div>
  );
}






               