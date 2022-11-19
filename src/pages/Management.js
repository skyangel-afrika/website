import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';

import background from '../assets/images/homepage/slide8.jpg';
import nyasha from '../assets/images/team/nyasha.jpg';
import mudiwa from '../assets/images/team/mudiwa.jpg';
import desmond from '../assets/images/team/desmond.jpg';

export default function Management() {

  return (
    <div style={{ marginTop: '-60px', backgroundImage: `url(${background})` }}>
      <Helmet>
        <title>Team | SkyAngel</title>
      </Helmet>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant='h3' align='center' style={{ marginBottom: '20px' }} >
        Our Team
      </Typography>
      <Container maxWidth='lg'>
        <Grid container spacing={5} padding='40px, 0' alignItems='stretch' justifyContent='center'>
          <Grid item xs={9.4} sm={4.8} md={4.8} lg={2.9}>
            <Card sx={{ justifyContent: 'center', backgroundColor: '#0000ff00', height: '250px', border: "none", boxShadow: "none" }} >
              <CardMedia
                component="img"
                sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                image={mudiwa}
                alt="Mudiwa Hood"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={7.2} md={7.2} lg={7}>
            <Card sx={{ backgroundColor: '#e1e1e1', height: '250px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '0 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Mudiwa Hood
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    CEO
                  </Typography>
                  <hr />
                  <Typography variant="body2" color="text.secondary" component="div">
                    Mudiwa is a multi award winning Christian Rapper from Zimbabwe. He has a Masters in finance and a BS in Economics. With his academic background he has had over a decade working in the banking sector until turned enterprenuer. He has founded and co-founded several businesss
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={9.4} sm={4.8} md={4.8} lg={2.9}>
            <Card sx={{ justifyContent: 'center', backgroundColor: '#0000ff00', height: '250px', border: "none", boxShadow: "none" }} >
              <CardMedia
                component="img"
                sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                image={nyasha}
                alt="Nyasha Paradzai"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={7.2} md={7.2} lg={7}>
            <Card sx={{ backgroundColor: '#e1e1e1', height: '250px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '0 0 auto' }}>
                  <Typography component="div" variant="h6">
                    Nyasha Paradzai
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    COO
                  </Typography>
                  <hr />
                  <Typography variant="body2" color="text.secondary" component="div">
                    Nyasha is a business Development, marketing and sales maverick. His profesional life has seen him working with startups as well as struggling companies . He is a holder of a Private Pilot License working towards his commercial license. He is also a holder of a BS in Business Administration and a diploma in Economics and International business.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={9.4} sm={4.8} md={4.8} lg={2.9}>
            <Card sx={{ justifyContent: 'center', backgroundColor: '#0000ff00', height: '250px', border: "none", boxShadow: "none" }} >
              <CardMedia
                component="img"
                sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                image={desmond}
                alt="Desmond Chideme"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={7.2} md={7.2} lg={7}>
            <Card sx={{ backgroundColor: '#e1e1e1', height: '250px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '0 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Desmond Chideme
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Director
                  </Typography>
                  <hr />
                  <Typography variant="body2" color="text.secondary" component="div">
                    Desmond is a multi award winning hiphop artist in Zimbabwe whose music career has taken him to every continent on the planet. He has received several awards locally and internationally for his musical prowess. He is a fully qualified fashion designer and owner of a leading clothing line. He is also a qualified motor mechanic.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
    </div>
  );
}






