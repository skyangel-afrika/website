import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';

import background from '../assets/images/homepage/slide8.jpg'

import { db } from '../firebase-config';

const Booking = () => {


  const [newName, setNewName] = useState("");
  const [newSurname, setNewSurname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newDeparting, setNewDeparting] = useState("");
  const [newArriving, setNewArriving] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPassengers, setNewPassengers] = useState("");

  const [loader, SetLoader] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    SetLoader(true)

    db.collection('reservations').add({
      name: newName,
      surname: newSurname,
      email: newEmail,
      phone: newPhone,
      departing: newDeparting,
      date: newDate,
      arriving: newArriving,
      passengers: newPassengers,
    })
      .then(() => {
        alert("Reservation successfully submitted! We will get back to you")
        SetLoader(false)
      })
      .catch(error => {
        alert(error.message)
        SetLoader(false)
      })

    //After Submission clear the form
    setNewName("")
    setNewSurname("")
    setNewPhone("")
    setNewEmail("")
    setNewDeparting("")
    setNewDate("")
    setNewArriving("")
    setNewPassengers("")
  }

  return (
    <div style={{ marginTop: '-80px', backgroundImage: `url(${background})` }}>
      <br />
      <br />
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "50px auto", backgroundColor: '#e1e1e1' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              Make a Reservation
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom align="center">
              Fill in the details of your flight and our team will get back to you right away!
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth 
                    required
                    title={newName}
                    onChange={(e) => {
                      setNewName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth required
                    value={newSurname}
                    onChange={(e) => {
                      setNewSurname(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email" name='email'
                    variant="outlined"
                    fullWidth required
                    value={newEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    name='phone'
                    variant="outlined"
                    fullWidth required
                    value={newPhone}
                    onChange={(e) => {
                      setNewPhone(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="Departing from"
                    placeholder="travelling from"
                    label="Departure Place"
                    name='from'
                    variant="outlined"
                    fullWidth required
                    value={newDeparting}
                    onChange={(e) => {
                      setNewDeparting(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <TextField
                      type="date"
                      name='date'
                      variant="outlined"
                      fullWidth required
                      value={newDate}
                      onChange={(e) => {
                        setNewDate(e.target.value);
                      }}
                    />
                  </Grid>
                  <br />
                  <TextField
                    type="Arrival Place"
                    placeholder="travelling to"
                    label="Arrival Place"
                    name='to'
                    variant="outlined"
                    fullWidth required
                    value={newArriving}
                    onChange={(e) => {
                      setNewArriving(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Number of Passengers on board"
                    label="Passengers"
                    name='passengers'
                    variant="outlined"
                    fullWidth required
                    value={newPassengers}
                    onChange={(e) => {
                      setNewPassengers(e.target.value);
                    }}
                  />
                </Grid>
                <br />
                <Grid item xs={12}>
                  <Button type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: loader ? '#ccc': "#333333",
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
      </Grid>
      <br />
    </div>
  )
}

export default Booking;







