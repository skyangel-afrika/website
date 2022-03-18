import React, {useRef} from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Container} from '@mui/material';
//import emailjs from '@emailjs/browser';
import {Email, Call, WhatsApp} from '@mui/icons-material';

import background from '../assets/images/homepage/slide8.jpg'

export default function ContactUs() {

    {/*const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_smhzw', 'smhzw_contact_us', form.current, 'user_SeWGNWkKA3O46nHXfr60y')
      .then((result) => {
          console.log(result.text);
          alert('Submission successful, we will get back to you');
      }, (error) => {
          console.log(error.text);
          alert('Error! Please try again')
      });
      form.current.reset()
  }; */}

    return (
        <div style={{marginTop: '-80px', backgroundImage: `url(${background})`}}>
          <br/>
          <br/>
          <Grid>
             <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "50px auto", backgroundColor: '#e1e1e1' }}>
                 <CardContent>
                      <Typography gutterBottom variant="h5" align="center">
                        Reach Out to Us
                      </Typography> 
                      <Typography variant="body2" color="textSecondary" component="p" gutterBottom align="center">
                         Fill us in and we will get back to you as fast as we can
                      </Typography> 
                      <form  >   {/*ref={form} onSubmit={sendEmail}*/}
                         <Grid container spacing={1}>
                              <Grid xs={12} sm={6} item>
                                 <TextField placeholder="Enter first name" label="First Name" name='name' variant="outlined" fullWidth required />
                              </Grid>
                              <Grid xs={12} sm={6} item>
                                 <TextField placeholder="Enter last name" label="Last Name" name='surname' variant="outlined" fullWidth required />
                              </Grid>
                              <Grid item xs={12}>
                                 <TextField type="email" placeholder="Enter email" label="Email" name='email' variant="outlined" fullWidth required />
                              </Grid>
                              <Grid item xs={12}>
                                 <TextField type="number" placeholder="Enter phone number" label="Phone" name='phone' variant="outlined" fullWidth required />
                              </Grid>
                              <Grid item xs={12}>
                                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" name='message' variant="outlined" fullWidth required />
                              </Grid>
                              <Grid item xs={12}>
                                  <Button type="submit" 
                                  variant="contained"  
                                  style={{
                                      backgroundColor: '#333333',
                                       color: '#e1e1e1',
                                       fontSize: '14px', 
                                       borderRadius: 10 
                                    }}
                                  >
                                    Submit 
                                  </Button>
                              </Grid>

                          </Grid>
                      </form>
                  </CardContent>
              </Card>
          </Grid>
          <Container maxWidth='md' alignItems='center' >
            <Email style={{size: '20px'}}/> 
            <Typography variant='h6' align='center'>
              info@skyangel.co.zw
            </Typography>
            <Typography variant='h6' align='center'>
              skyangel.afrika@gmail.com
            </Typography>
            <br/>
            <WhatsApp/>
            <Typography variant='h6' align='center'>
              +27 67 102 7074
            </Typography>
            <br/>
             <Call/> 
            <Typography variant='h6' align='center'>
                +263 77 550 4960
            </Typography>
            <br/>
          </Container>
        </div>
    )
}