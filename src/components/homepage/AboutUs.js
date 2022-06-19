import React from 'react';
import {Container, Typography, Grid, Card, CardContent} from '@mui/material'; 

import businessCharter from '../../assets/images/service/businessCharter.jpg';
import ambulance from '../../assets/images/service/ambulance.jpg';
import cargo from '../../assets/images/service/cargo.jpg';


function AboutUs() {
  return (
    <div>
        <Container maxWidth='lg' style={{marginTop: '30px', marginBottom: '20px'}}>
            <Container maxWidth='md'>
                <Typography variant='h4' align='center' style={{color: '#333333'}} marginBottom='15px'> Why SkyAngel?</Typography>
                <Typography variant='h6' align='center' style={{color: '#333333', fontSize: '1.1rem'}} >
                With us, comfort and a professional service on your private charter flights are matched with attention to detail for your peace of mind. We offer an efficient service and boast a large fleet of impressive charter aircraft.
                </Typography>
                <br/>

            </Container>
            <Grid container   style={{marginTop: '30px'}}  spacing={2} padding='40px, 0'  alignItems='stretch'>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card  style ={{
                            backgroundImage: `url(${businessCharter})` , 
                            height: '450px',
                        }}
                    >
                        <CardContent>
                            <Typography  alignItems='center' variant='h5' style={{   color: '#fff', marginTop:'220px' }} >
                                Private Charter Flights  
                            </Typography>
                            <br/>
                            <Typography sx={{ mb: 1.5 }} style={{fontSize: "1.0rem", color: '#fff'}}>
                                SkyAngel encompasses luxury, comfort, safety and flexibility to ensure an experience of a lifetime. 
                            </Typography>
                        </CardContent>    
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card  style ={{
                            backgroundImage: `url(${ambulance})` , 
                            height: '450px',
                        }}
                    >
                        <CardContent>
                            <Typography  alignItems='center' variant='h5' style={{   color: '#fff', marginTop:'220px' }} >
                                Ambulance & Emergency Services
                            </Typography>
                            <br/>
                            <Typography sx={{ mb: 1.5 }} style={{fontSize: "1.0rem", color: '#fff'}}>
                                We ensure a rapid response time to any medical emergency or evacuation from a high-risk environment. 
                            </Typography>
                        </CardContent>    
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card  style ={{
                            backgroundImage: `url(${cargo})` , 
                            height: '450px',
                        }}
                    >
                        <CardContent>
                            <Typography  alignItems='center' variant='h5' style={{   color: '#fff', marginTop:'220px' }} >
                                Cargo Services
                            </Typography>
                            <br/>
                            <Typography sx={{ mb: 1.5 }} style={{fontSize: "1.0rem", color: '#fff'}}>
                                SkyAngel offers unique cargo services. We can accommodate anything to suit your personal needs.
                            </Typography>
                        </CardContent>    
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default AboutUs