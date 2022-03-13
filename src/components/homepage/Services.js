import React from 'react'
import {Grid, Typography, Card, CardContent, Container} from '@mui/material';

import businessCharter from '../../assets/images/service/businessCharter.jpg';
import groupCharter from '../../assets/images/service/groupCharter.jpg';
import accomodation from '../../assets/images/service/accomodation.jpg';
import airAmbulance from '../../assets/images/service/airAmbulance.jpg';
import cargo from '../../assets/images/service/cargo.jpg';

function Services() {
  return (
    <div>
        <Container maxWidth='lg' style={{marginTop: '20px'}}>
            <Typography variant='h4' align='center' color='#333333'>
                Our Services
            </Typography>
            <Grid container    spacing={5}   alignItems='center' marginTop='5px'>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                   <Card>
                       <CardContent style ={{backgroundColor: "#fffdd0" , height: '450px'}}>
                           <Typography variant='h5' color='#333333' align='center'>
                               Business Charter
                           </Typography>
                           <img src={businessCharter} alt='business charter' width='100%' />
                           <Typography variant='body2' color='#333333' align='center'>
                               When you charter a jet with us, we guarantee you a smooth travel, tailored to your needs. From the terminal to your hotel, as well as the airport, you'll enjoy fast procedures and dedicated personnel entirely at your service. You will enjoy quiet travel in an aircraft rented only for you.
                           </Typography>
                       </CardContent>
                   </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                   <Card>
                       <CardContent style ={{backgroundColor: "#fffdd0" , height: '450px'}}>
                           <Typography variant='h5' color='#333333' align='center'>
                               Group Air Charter
                           </Typography>
                           <img src={groupCharter} alt='group charter' width='100%' />
                           <Typography variant='body2' color='#333333' align='center'>
                               We offer creative group charter solutions to meet all needs. From the catering to special headrest, passengers will experience a fully custom travel. Once at the airport, we can ensure a transit solution to the meeting hall or the hotel where the conference is held.
                           </Typography>
                       </CardContent>
                   </Card>
                </Grid>
            </Grid>
            <Grid container    spacing={5}   alignItems='center' marginTop='20px' marginBottom='10px'>
               <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card>
                        <CardContent style ={{backgroundColor: "#fffdd0" , height: '370px'}}>
                            <Typography variant='h6' color='#333333' align='center'>
                                Cargo Services
                            </Typography>
                            <img src={cargo} alt='group charter' width='100%' />
                            <Typography variant='body2' color='#333333' align='center'>
                               Time critical, outsize, or perishable, however substantial or complex the cargo, you can rely on us to get it there on time on budget 24/7. We offer a unique cargo aircraft charter service tailored for your specific needs. 
                            </Typography>
                        </CardContent>
                   </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card>
                        <CardContent style ={{backgroundColor: "#fffdd0" , height: '370px'}}>
                            <Typography variant='h6' color='#333333' align='center'>
                                Air Ambulance
                            </Typography>
                            <img src={airAmbulance} alt='group charter' width='100%' />
                            <Typography variant='body2' color='#333333' align='center'>
                               If your patient needs to travel abroad for medical treatment, an air ambulance is often the most direct and convenient way to travel. It’s also extremely fast – we can usually arrange a flight within hours of your first call, and be airborne in a short space of time.
                            </Typography>
                        </CardContent>
                   </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card>
                        <CardContent style ={{backgroundColor: "#fffdd0" , height: '370px'}}>
                            <Typography variant='h6' color='#333333' align='center'>
                                Accomodation & Activities
                            </Typography>
                            <img src={accomodation} alt='group charter' width='100%' />
                            <Typography variant='body2' color='#333333' align='center'>
                               	Hotels
                            </Typography>
                            <Typography variant='body2' color='#333333' align='center'>
                               	Lodges
                            </Typography>
                            <Typography variant='body2' color='#333333' align='center'>
                               	Camping sites
                            </Typography>
                        </CardContent>
                   </Card>
               </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Services