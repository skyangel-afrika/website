import { doc, onSnapshot, collection, addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Helmet } from 'react-helmet';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, TextField, Button } from "@mui/material";

export default function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState('');
  const [loader, setLoader] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = (newPhone) => {
    setPhone(newPhone)
  }

  useEffect(() => {
    const docRef = doc(db, "skyevents", id);
    onSnapshot(docRef, (snapshot) => {
      setEvent({ ...snapshot.data(), id: snapshot.id });
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    await addDoc(collection(db, 'skyreservations'), {
      createdAt: new Date(),
      skyEvent: event.title,
      name: name,
      email: email,
      phone: phone
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
    setEmail('');
    setPhone('');
  };

  return (
    <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5' }}>
      <Helmet>
        <title>  SkyEvents | SkyAngel</title>
      </Helmet>
      <Container maxWidth='md' style={{ backgroundColor: '#f5f5f5' }}>
        {event && (
          <Grid container spacing={3} alignItems='center' style={{ marginBottom: '20px' }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card style={{ backgroundColor: '#f5f5f5', border: "none", boxShadow: "none" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="450"
                  image={event.imageUrl}
                  alt={event.title}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ minWidth: 275 }}>
                <Card style={{ backgroundColor: '#f5f5f5', border: "none", boxShadow: "none" }}>
                  <CardContent>
                    <br />
                    <br />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Duration: {event.duration}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Price: {event.price}
                    </Typography>
                    <br />
                    <Typography variant="body1">
                      {event.details}
                    </Typography>
                  </CardContent>
                  <Card style={{ maxWidth: 450, padding: '20px 5px', backgroundColor: '#f5f5f5', border: "none", boxShadow: "none" }}>
                    <CardContent>
                      <Typography variant='body2' color='textSecondary' component='p' gutterBottom align='center'>
                        If interested, please fill in your details and we will get back to you.
                      </Typography>
                      <form onSubmit={handleSubmit} >
                        <Grid container spacing={1}>
                          <Grid xs={12} item>
                            <TextField
                              placeholder='Name'
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              variant='outlined'
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              placeholder='Email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              variant='outlined'
                              fullWidth required
                            />
                          </Grid>
                          <Grid item xs={12} marginTop='5px'>
                            <PhoneInput
                              inputStyle={{ color: '#444444', background: '#f5f5f5', fontSize: '15px' }}
                              buttonStyle={{ background: '#f5f5f5' }}
                              dropdownStyle={{ align: 'left', background: '#f5f5f5' }}
                              inputProps={{
                                required: true,
                              }}
                              country={'zw'}
                              value={phone}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Button type='submit'
                              variant='contained'
                              style={{
                                backgroundColor: loader ? '#ccc' : '#333333',
                                color: '#f5f5f5',
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
                </Card>
              </Box>
            </Grid>
          </Grid>
        )}
        <br />
      </Container>
    </div >
  );
}














