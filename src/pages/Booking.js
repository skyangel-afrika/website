import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Helmet } from 'react-helmet';

import { db } from '../firebase-config';
import background from '../assets/images/homepage/slide8.jpg';

export default function Booking(props) {

  const [loader, setLoader] = useState(false)
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [departing, setDeparting] = useState('');
  const [arriving, setArriving] = useState('');
  const [travellingDate, setTravellingDate] = useState('');
  const [passengers, setPassengers] = useState('');

  const handleChange = (newPhone) => {
    setPhone(newPhone)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    await addDoc(collection(db, 'reservations'), {
      createdAt: new Date(),
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      departing: departing,
      travellingDate: travellingDate,
      arriving: arriving,
      passengers: passengers

    })
      .then(() => {
        setLoader(false);
        alert('Submission successful, we will get back to you');
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName('');
    setSurname('');
    setEmail('');
    setPhone('');
    setArriving('');
    setDeparting('');
    setTravellingDate('');
    setPassengers('');
  };



  return (
    <div style={{ marginTop: '-80px', backgroundImage: `url(${background})` }}>
      <Helmet>
        <title>Bookings | SkyAngel</title>
      </Helmet>
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
            <form onSubmit={handleSubmit} >
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder='Enter first name'
                    label='First Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant='outlined'
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder='Enter surname'
                    label='Surname'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    variant='outlined'
                    fullWidth required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type='email'
                    placeholder='Enter email'
                    label='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant='outlined'
                    fullWidth required
                  />
                </Grid>
                <Grid item xs={12} marginTop='5px'>
                  <PhoneInput
                    inputStyle={{ color: '#444444', background: '#e1e1e1' }}
                    buttonStyle={{ background: '#e1e1e1' }}
                    dropdownStyle={{ align: 'left', background: '#e1e1e1' }}
                    inputProps={{
                      required: true,
                    }}
                    country={'zw'}
                    value={phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder='Departing from'
                    label='Departing'
                    value={departing}
                    onChange={(e) => setDeparting(e.target.value)}
                    variant='outlined'
                    fullWidth required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type='date'
                    placeholder='Date'
                    value={travellingDate}
                    onChange={(e) => setTravellingDate(e.target.value)}
                    variant='outlined'
                    fullWidth required
                    background={'#e1e1e1'}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder='Arriving At'
                    label='Arriving'
                    value={arriving}
                    onChange={(e) => setArriving(e.target.value)}
                    variant='outlined'
                    fullWidth required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type='number'
                    placeholder='Passengers'
                    label='Passengers'
                    name='Passengers'
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    variant='outlined'
                    fullWidth required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit'
                    variant='contained'
                    style={{
                      backgroundColor: loader ? '#ccc' : '#333333',
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
        <br />
        <br />
      </Grid>
    </div>
  )
}


