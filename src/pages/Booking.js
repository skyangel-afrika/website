import React, { useRef, useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import ReactPhoneInput from 'react-phone-input-mui';

import background from '../assets/images/homepage/slide8.jpg'

export default function Booking(props) {

  const { value, defaultCountry, onChange } = props;
  const [loader, SetLoader] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    SetLoader(true)                     

    emailjs.sendForm('SkyAngel', 'skyangel_reservations', form.current, 'CVbmnWNto-qCmsU1x')
      .then((result) => {
        console.log(result.text);
        alert('Submission successful, we will get back to you');
        SetLoader(false)
      }, (error) => {
        console.log(error.text);
        alert('Error! Please try again')
        SetLoader(false)
      });
    form.current.reset()
  };

  return (
    <div style={{ marginTop: '-80px', backgroundImage: `url(${background})` }}>
      <br />
      <br />
      <Grid>
        <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '50px auto', backgroundColor: '#e1e1e1' }}>
          <CardContent>
            <Typography gutterBottom variant='h5' align='center'>
              Make a Reservation
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p' gutterBottom align='center'>
              Fill in the basics of your flight and we'll get back to you
            </Typography>
            <form ref={form} onSubmit={sendEmail} >
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder='Enter first name' label='First Name' name='name' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder='Enter surname' label='Surname' name='surname' variant='outlined' fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type='email' placeholder='Enter email' label='Email' name='email' variant='outlined' fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <ReactPhoneInput
                    value={value}
                    defaultCountry={defaultCountry || 'zw'}
                    onChange={onChange}
                    component={TextField}
                    inputExtraProps={{
                      margin: 'normal',
                      autoComplete: 'phone',
                      name: 'phone',
                      placeholder: 'Phone number',
                      label: 'Phone'
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField placeholder='Departing from' label='Departing' name='departing' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <TextField type='date' placeholder='Date' name='date' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <TextField placeholder='Arriving At' label='Arriving' name='arriving' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <TextField type='number' placeholder='Passengers' label='Passengers' name='Passengers' variant='outlined' fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: loader ? '#ccc' : "#333333",
                      color: '#e1e1e1',
                      fontSize: '14px',
                      borderRadius: 10,
                    }}
                  >
                    Make Reservation
                  </Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
        <br/>
        <br/>
      </Grid>
    </div>
  )
}