import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase-config';
import { toast } from 'react-toastify';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import SideDrawer from './components/SideDrawer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const mdTheme = createTheme();

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    details: '',
    image: '',
    price: '',
    createdAt: Timestamp.now().toDate(),
  });

  const [loader, setLoader] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    setLoader(true);
    if (!formData.title || !formData.description || !formData.details || !formData.duration || !formData.image) {
      alert('Please fill all the fields');
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: '',
          description: '',
          image: '',
          details: '',
          price: '',
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, 'skyevents');
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            duration: formData.duration,
            price: formData.price,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast('Article added successfully', { type: 'success' });
              setLoader(false);
            })
            .catch((err) => {
              toast('Error adding article', { type: 'error' });
              setLoader(false);
            });
        });
      }
    );
  };



  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideDrawer />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <Container maxWidth='sm' style={{ marginTop: '20px', marginBottom: '15px' }}>
            <Typography variant='h5' align='center'>Add Event</Typography>
            <br/>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  name='title'
                  placeholder='Title'
                  value={formData.title}
                  onChange={(e) => handleChange(e)}
                  variant='outlined'
                  fullWidth required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name='duration'
                  placeholder='Duration'
                  value={formData.duration}
                  onChange={(e) => handleChange(e)}
                  variant='outlined'
                  fullWidth required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name='description'
                  placeholder='Mini description'
                  value={formData.description}
                  onChange={(e) => handleChange(e)}
                  variant='outlined'
                  fullWidth required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name='price'
                  placeholder='Price'
                  value={formData.price}
                  onChange={(e) => handleChange(e)}
                  variant='outlined'
                  fullWidth required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name='details'
                  multiline rows={4}
                  placeholder='Details'
                  value={formData.details}
                  onChange={(e) => handleChange(e)}
                  variant='outlined'
                  fullWidth required
                />
              </Grid>
              <Grid xs={12} item>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e)}
                />

              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  style={{
                    backgroundColor: loader ? '#ccc' : '#333333',
                    color: '#e1e1e1',
                    fontSize: '14px',
                    borderRadius: 10,
                  }}
                  onClick={handlePublish}
                >
                  Add Event
                </Button>
              </Grid>

            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider >
  )
}

export default AddEvent


