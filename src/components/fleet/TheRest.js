import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Card, Typography, CardContent, Grid} from '@mui/material';

//importing the images
import crj100int from '../../assets/images/fleet/CRJ100ER200Interior.jpg';
import crj100Ext from '../../assets/images/fleet/CRJ100ER200Exterior.jpg';

import embraerInt from '../../assets/images/fleet/Embraer120Interior.jpg';
import embraerExt from '../../assets/images/fleet/Embraer120Exterior.jpg';

import boeing767Int from '../../assets/images/fleet/BoeingB767200ERInterior.jpg';
import boeing767Ext from '../../assets/images/fleet/BoeingB767200ERExterior.jpg';

import boeing737Int from '../../assets/images/fleet/Boeing737Interior.jpg';
import boeing737Ext from '../../assets/images/fleet/Boeing737Exterior.jpg';

//declaring constants
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imgCRJ = [
    {
      crjImg: crj100Ext ,
    },
    {
        crjImg: crj100int ,
    },
    
];

const imgEmbraer = [
    {
      embraerImg: embraerExt,
    },
    {
        embraerImg: embraerInt,
    },
];
const imgBoeing767 =[
    {
      boeing767Img: boeing737Ext,
    },
    {
      boeing767Img: boeing767Int,
    },
];
const imgBoeing737=[
    {
      boeing737Img: boeing737Ext,
    },
    {
      boeing737Img: boeing737Int,
    },
];

function TheRest() {
    const theme = useTheme();
    
  return (
    <div>
             <Grid container spacing={5} padding='40px, 0'  alignItems='stretch' style={{marginTop: '20px'}} >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card style={{height: '400px', backgroundColor: '#e1e1e1'}}>
                        <CardContent>
                            <AutoPlaySwipeableViews
                              enableMouseEvents
                            >
                              {imgCRJ.map(crj => (
                               
                                <img
                                 
                                  src={crj.crjImg}
                                  alt='CRJ 100 ER200'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                CRJ 100 ER200
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card style={{height: '400px', backgroundColor: '#e1e1e1'}}>
                        <CardContent>
                            <AutoPlaySwipeableViews
                              enableMouseEvents
                            >
                              {imgEmbraer.map(embraer => (
                               
                                <img
                                 
                                  src={embraer.embraerImg}
                                  alt='Embraer 120'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Embraer 120
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card style={{height: '400px', backgroundColor: '#e1e1e1'}}>
                        <CardContent>
                            <AutoPlaySwipeableViews
                              enableMouseEvents
                            >
                              {imgBoeing767.map(boeing767 => (
                               
                                <img
                                 
                                  src={boeing767.boeing767Img}
                                  alt='Boeing B767 200ER'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                               Boeing B767 200ER
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card style={{height: '400px', backgroundColor: '#e1e1e1'}}>
                        <CardContent>
                            <AutoPlaySwipeableViews
                              enableMouseEvents
                            >
                              {imgBoeing737.map(boeing737 => (
                               
                                <img
                                 
                                  src={boeing737.boeing737Img}
                                  alt='Boeing 737'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Boeing 737
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
    </div>
  )
};

export default TheRest





