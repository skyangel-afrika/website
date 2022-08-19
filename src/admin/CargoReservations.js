import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import SideDrawer from './components/SideDrawer';
import CargoReservationsTable from './components/reservations/CargoReservationsTable';



const mdTheme = createTheme();

const CargoReservations = () => {

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
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Typography variant='h5' style={{ marginTop: '20px' }}>
            Cargo Reservations
          </Typography>
          <br />
          <CargoReservationsTable />
        </Box>
      </Box>
    </ThemeProvider>
  );
};


export default CargoReservations


