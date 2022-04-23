import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Card, Typography, CardContent, Grid} from '@mui/material';

//importing the images
import beechcraftint from '../../assets/images/fleet/beechcraft1900Interior.jpg';
import beechcraftExt from '../../assets/images/fleet/beechcraft1900Exterior.jpg';

import beechcraftKingInt from '../../assets/images/fleet/beechcraftKingAir350iInterior.jpg';
import beechcraftKingExt from '../../assets/images/fleet/beechcraftKingAir350iExterior.jpg';

import challenger300Int from '../../assets/images/fleet/challenger300Interior.jpg';
import challenger300Ext from '../../assets/images/fleet/challenger300Exterior.jpg';

import challenger600Int from '../../assets/images/fleet/challenger600Interior.jpg';
import challenger600Ext from '../../assets/images/fleet/challenger600Exterior.jpg';

import challenger601Int from '../../assets/images/fleet/challenger601Interior.jpg';
import challenger601Ext from '../../assets/images/fleet/challenger601Exterior.jpg';

import challenger605Int from '../../assets/images/fleet/Challenger605Interior.jpg';
import challenger605Ext from '../../assets/images/fleet/challenger605Exterior.jpg';

//declaring constants
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imgBeechcraft = [
    {
      beechcraftImg: beechcraftExt ,
    },
    {
      beechcraftImg: beechcraftint,
    },
    
];

const imgBeechcraftKing = [
    {
      beechcraftKingImg: beechcraftKingExt,
    },
    {
      beechcraftKingImg: beechcraftKingInt,
    },
];
const imgChallenger300 =[
    {
      challenger300Img: challenger300Ext,
    },
    {
      challenger300Img: challenger300Int,
    },
];
const imgChallenger601=[
    {
      Challenger601Img: challenger601Ext,
    },
    {
        Challenger601Img: challenger601Int,
    },
];
const imgChallenger605=[
    {
      Challenger605Img: challenger605Ext,
    },
    {
        Challenger605Img: challenger605Int,
    },
];
const imgChallenger600=[
    {
      Challenger600Img: challenger600Ext,
    },
    {
        Challenger600Img: challenger600Int,
    },
];

function BeechcraftChallenger() {
    
  return (
    <div>
             <Grid container spacing={5} padding='40px, 0'  alignItems='stretch' style={{marginTop: '20px'}} >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card style={{height: '400px', backgroundColor: '#e1e1e1'}}>
                        <CardContent>
                            <AutoPlaySwipeableViews
                              enableMouseEvents
                            >
                              {imgBeechcraft.map(beech1 => (
                               
                                <img
                                 
                                  src={beech1.beechcraftImg}
                                  alt='Beechcraft 1900'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Beechcraft 1900
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
                              {imgBeechcraftKing.map(beech2 => (
                               
                                <img
                                 
                                  src={beech2.beechcraftKingImg}
                                  alt='Beechcraft King Air 350i'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Beechcraft King Air 350i
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
                              {imgChallenger300.map(imgChall300 => (
                               
                                <img
                                 
                                  src={imgChall300.challenger300Img}
                                  alt='Challenger 300'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Challenger 300
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
                              {imgChallenger600.map(imgChall600 => (
                               
                                <img
                                 
                                  src={imgChall600.Challenger600Img}
                                  alt='Challenger 600'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Challenger 600
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
                              {imgChallenger601.map(imgChall601 => (
                               
                                <img
                                 
                                  src={imgChall601.Challenger601Img}
                                  alt='Challenger 601'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Challenger 601
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
                              {imgChallenger605.map(imgChall605 => (
                               
                                <img
                                 
                                  src={imgChall605.Challenger605Img}
                                  alt='Challenger 605'
                                  style={{height: '300px'}}
                                />
                              ))}
                            </AutoPlaySwipeableViews>
                            <hr/>
                            <Typography variant='h6' align='center'>
                                Challenger 605
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
    </div>
  )
};

export default BeechcraftChallenger





