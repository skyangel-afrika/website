import React, { useRef, useState } from 'react';
import { Grid, TextField, Button,  CardContent, Typography, Container, Stack } from '@mui/material';
import emailjs from '@emailjs/browser';
import { FlightTakeoff, TravelExplore, CandlestickChart, Language } from '@mui/icons-material';
import Box from '@mui/material/Box';

export default function ContactUs() {
  const form = useRef();
  const [loader, setLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs.sendForm('SkyAngel', 'skyangelContact', form.current, 'CVbmnWNto-qCmsU1x')
      .then((result) => {
        console.log(result.text);
        setLoader(false);
        alert('Submission successful, we will get back to you');
      }, (error) => {
        console.log(error.text);
        setLoader(false);
        alert('Error! Please try again')
      });
    form.current.reset()
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <br />
      <br />
      <Typography variant='h4' color='#333333' align='center' marginBottom='15px'>
        Contact Us
      </Typography>
      <Container maxWidth='lg'>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={12} sm={12} md={4} lg={4} >
            <form ref={form} onSubmit={sendEmail} >
              <Grid container spacing={1} style={{ backgroundColor: '#f5f5f5' }}>
                <Grid xs={12} sm={12} item>
                  <TextField placeholder="Name" label="Name" name='name' variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" name='email' variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" name='message' variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: loader ? '#ccc' : '#333333',
                      color: '#e1e1e1',
                      fontSize: '14px',
                      borderRadius: 10,
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} >
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <FlightTakeoff />
                  <Typography component="div" variant="h6" style={{ color: '#333333' }}>
                    Reservations
                  </Typography>
                </Stack>
                <Typography variant='subtitle' color="text.secondary" component="div" align='left'>
                  skyangel.afrika@gmail.com
                </Typography>
                <Typography variant='subtitle' color="text.secondary" component="div" align='left'>
                  +263 77 550 4960
                </Typography>
                <br />
                <br />
                <Stack direction="row" alignItems="center" gap={1}>
                  <TravelExplore />
                  <Typography component="div" variant="h6" style={{ color: '#333333' }}>
                    Enquiries
                  </Typography>
                </Stack>
                <Typography variant='subtitle' color="text.secondary" component="div" align='left'>
                  enquiries@skyangel.co.zw
                </Typography>
                <Typography variant='subtitle' color="text.secondary" component="div" align='left'>
                  +27 67 102 7074
                </Typography>
              </CardContent>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} >
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <CandlestickChart />
                  <Typography component="div" variant="h6" style={{ color: '#333333' }}>
                    Investors
                  </Typography>
                </Stack>
                <Typography variant='subtitle' color="text.secondary" component="div" align='left'>
                  nyasha@skyangel.co.zw
                </Typography>
                <Typography variant='subtitle' color="text.secondary" component="div" align='left'>
                  +27 67 102 7074
                </Typography>
                <br />
                <br />
                <Stack direction="row" alignItems="center" gap={1}>
                  <Language />
                  <Typography component="div" variant="h6" style={{ color: '#333333' }}>
                    Support
                  </Typography>
                </Stack>
                <Typography variant='subtitle' color="text.secondary" component="div" align='left'>
                  tapiwa@skyangel.co.zw
                </Typography>
                <Typography variant='subtitle' color="text.secondary" component="div" align='left'>
                  +263 77 496 8265
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <br />
    </div>
  )
}