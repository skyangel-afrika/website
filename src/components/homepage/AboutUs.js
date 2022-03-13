import React from 'react';
import {Container, Typography, Grid, Card, CardContent} from '@mui/material'; 

function AboutUs() {
  return (
    <div>
        <Container maxWidth='lg' style={{marginTop: '30px', marginBottom: '20px'}}>
            <Container maxWidth='md'>
                <Typography variant='h4' align='center' color='#333333' marginBottom='15px'> Why Work With Us?</Typography>
                <Typography variant='body' align='center' color='#333333' style={{fontSize: '18px'}}>
                    SkyAngel encompasses luxury, comfort, safety and flexibility to ensure an experience of a lifetime. The comfort and professional service of charter flying is unlimited. Offering luxury and efficient disservices, we provide Private Jets, Helicopters and accommodation facilities upon your request.
                </Typography>
                <br/>
                <Typography variant='body' align='center' color='#333333' style={{fontSize: '18px'}}>
                    A friendly 24x7 support team can accommodate all of your basic and advanced needs.
                </Typography>
            </Container>
            <Grid container   style={{marginTop: '30px'}}  spacing={5} padding='40px, 0'  alignItems='stretch' marginTop='30px'>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card>
                       <CardContent style ={{backgroundColor: "#fffdd0" , height: '200px'}}>
                            <Typography variant='h5' style={{color: '#333333'}} gutterBottom>
                                Service
                            </Typography>
                            <hr/>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#333333'}}>
                                 Personalised solutions according to your needs. 
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#333333'}}>
                                 Minimal contact. Easy Booking system. Fast quote. 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card>
                       <CardContent style ={{backgroundColor: "#fffdd0" , height: '200px'}}>
                            <Typography variant='h5' style={{color: '#333333'}} gutterBottom>
                                Safety & Price
                            </Typography>
                            <hr/>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#333333'}}>
                                We work with international certified partners
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#333333'}}>
                                Flexible pricing. No hidden fees. Minimal markup.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card>
                       <CardContent style ={{backgroundColor: "#fffdd0" , height: '200px'}}>
                            <Typography variant='h5' style={{color: '#333333'}} gutterBottom>
                                Privacy
                            </Typography>
                            <hr/>
                            <Typography sx={{ mb: 1.5 }} style={{color: '#333333'}}>
                                Discretion ensured by a non-disclosure agreement. 
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