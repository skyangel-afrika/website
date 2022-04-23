import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Card, Typography, CardContent, Grid} from '@mui/material';

//importing the images
import falconint from '../../assets/images/fleet/Falcon900EXInterior.jpg';
import falconExt from '../../assets/images/fleet/Falcon900EXExterior.jpg';

import gulfstreamInt from '../../assets/images/fleet/GulfstreamGVInterior.jpg';
import gulfstreamExt from '../../assets/images/fleet/GulfstreamGVExterior.jpg';

import hawkerInt from '../../assets/images/fleet/Hawker800XPInterior.jpg';
import hawkerExt from '../../assets/images/fleet/Hawker800XPExterior.jpg';

import learjet45Int from '../../assets/images/fleet/Learjet45Interior.jpg';
import learjet45Ext from '../../assets/images/fleet/Learjet45Exterior.jpg';

import learjet60Int from '../../assets/images/fleet/Learjet60Interior.jpg';
import learjet60Ext from '../../assets/images/fleet/Learjet60Exterior.jpg';

import pilatusInt from '../../assets/images/fleet/PilatusPC12Interior.jpg';
import pilatusExt from '../../assets/images/fleet/PilatusPC12Exterior.jpg';

import expressInt from '../../assets/images/fleet/Express6000Interior.jpg';
import expressExt from '../../assets/images/fleet/Express6000Exterior.jpg';
//declaring constants
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
      falconImg: falconint ,
    },
    {
      falconImg: falconExt,
    },
    
];

const imgGulfs = [
    {
      gulfstreamImg: gulfstreamInt,
    },
    {
      gulfstreamImg: gulfstreamExt,
    },
];
const imgHawkers =[
    {
      hawkerImg: hawkerInt,
    },
    {
      hawkerImg: hawkerExt,
    },
]
const imgLearjet45=[
    {
      learjet45Img: learjet45Int,
    },
    {
      learjet45Img: learjet45Ext,
    },
]
const imgLearjet60=[
    {
      learjet60Img: learjet60Int,
    },
    {
      learjet60Img: learjet60Ext,
    },
]

const imgPilatus=[
    {
      pilatusImg: pilatusInt,
    },
    {
      pilatusImg: pilatusExt,
    },
];
const imgExpress=[
    {
      expressImg: expressInt,
    },
    {
      expressImg: expressExt,
    },
];

function FtoP() {
    
  return (
    <div>
             <Grid container spacing={5} padding='40px, 0'  alignItems='stretch' style={{marginTop: '20px'}} >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card style={{height: '400px', backgroundColor: '#e1e1e1'}}>
                        <CardContent>
                            <AutoPlaySwipeableViews
                              enableMouseEvents
                            >
                              {images.map(image => (
                               
                                <img
                                 
                                  src={image.falconImg}
                                  alt='Falcon 900 EX'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Falcon 900EX
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
                              {imgGulfs.map(imgGulf => (
                               
                                <img
                                 
                                  src={imgGulf.gulfstreamImg}
                                  alt='Gulfstream GV'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Gulfstream GV
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card style={{height: '400px', backgroundColor: '#e1e1e1'}}>
                        <CardContent>
                            <AutoPlaySwipeableViews
                              enableMouseEvents
                            >
                              {imgExpress.map(imgExpresso => (
                               
                                <img
                                 
                                  src={imgExpresso.expressImg}
                                  alt='Express 6000'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Express 6000
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card style={{height: '400px', backgroundColor: '#e1e1e1'}}>
                        <CardContent>
                            <AutoPlaySwipeableViews
                              enableMouseEvents
                            >
                              {imgHawkers.map(imgHawker => (
                               
                                <img
                                 
                                  src={imgHawker.hawkerImg}
                                  alt='Hawker'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Hawker 800XP
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card style={{height: '400px', backgroundColor: '#e1e1e1'}}>
                        <CardContent>
                            <AutoPlaySwipeableViews
                              enableMouseEvents
                            >
                              {imgPilatus.map(imgPilato => (
                               
                                <img
                                 
                                  src={imgPilato.pilatusImg}
                                  alt='Pilatus PC12'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Pilatus PC12
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
                              {imgLearjet45.map(imgLear45 => (
                               
                                <img
                                 
                                  src={imgLear45.learjet45Img}
                                  alt='Learjet 45'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Learjet 45
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
                              {imgLearjet60.map(imgLear60 => (
                               
                                <img
                                 
                                  src={imgLear60.learjet60Img}
                                  alt='Learjet 60'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Learjet 60
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
    </div>
  )
};

export default FtoP





