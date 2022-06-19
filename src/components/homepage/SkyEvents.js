import React from 'react';
import { Container, Typography} from '@mui/material';

function SkyEvents() {
    return (
        <div>
            <Container maxWidth='lg' style={{ marginTop: '30px', marginBottom: '10px' }}>
                <Container maxWidth='md'>
                    <Typography variant='h5' align='center' style={{ color: '#333333' }} marginBottom='25px'>
                        SkyEvents
                    </Typography>
                    <br />
                </Container>
                
            </Container>
        </div>
    )
}

export default SkyEvents