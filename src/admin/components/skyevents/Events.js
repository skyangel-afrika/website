import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from '../../../firebase-config';

const Events = () => {
  const [skyevents, setSkyevents] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "skyevents"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let skyeventsArray = [];
      querySnapshot.forEach((doc) => {
        skyeventsArray.push({ ...doc.data(), id: doc.id });
      });
      setSkyevents(skyeventsArray);
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "skyevents", id));
  };

  return (
    <div>
      <Container maxWidth='lg' style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Typography variant='h5' align='center' >
          SkyEvents
        </Typography>
        <br />
        <Link to='/admin/sky-events/add' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
          <Button variant='outlined' style={{ marginBottom: '15px', backgroundColor: '#333333', color: '#e1e1e1', borderRadius: '10' }}>
            Add Event
          </Button>
        </Link>
        <br />
        <Grid container spacing={3} alignItems='center'>
          {skyevents.map((skyevent) => (
            <Grid item lg={12} >
              <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardMedia
                    component="img"
                    sx={{ height: '400px', minWidth: '350px' }}
                    image={skyevent.imageUrl}
                    alt={skyevent.title}
                  />
                </Box>
                <Box >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      Title: {skyevent.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Description:  {skyevent.description}
                    </Typography>
                  </CardContent>
                  <br />
                  <Box >
                    <Typography component="div" variant="body1">
                      Details:  {skyevent.details}
                    </Typography>
                    <br />
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Duration: {skyevent.duration}
                    </Typography>
                    <br />
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Price: {skyevent.price}
                    </Typography>
                    <br />

                    <Button
                      variant='outlined'
                      style={{
                        color: '#FFF',
                        backgroundColor: 'red'
                      }}
                      onClick={() => handleDelete(skyevent.id)}
                    >
                      Delete event
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Events

