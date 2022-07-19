import React from 'react';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Container, Typography } from '@mui/material';
import {Link} from 'react-router-dom';

function BadRoute() {
    return (
        <div>
            <Container maxWidth='sm' alignItems='center' style={{ marginTop: '20px', height: '40vh' }}>
                <Typography style={{ fontSize: '30px' }}>
                    <FlightLandIcon style={{fontSize: '122px', color: '#333333'}}/> <SentimentVeryDissatisfiedIcon style={{fontSize: '45px', color: '#333333'}}/>
                </Typography>
                <br/>
                <Typography variant='subtitle1' >
                    Sorry, you landed on a bad route. Click <Link to='/'>here</Link> to return to safety. 
                </Typography>
            </Container>
        </div>
    )
}

export default BadRoute