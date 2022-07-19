import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Button, Grid } from '@mui/material';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Link } from 'react-router-dom'
import {
    collection,
    query,
    onSnapshot,
} from "firebase/firestore";

import { db } from '../../firebase-config';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 500,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
            flexDirection: 'row',
            paddingTop: spacing(2),
        },
    },
    media: {
        width: '88%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: spacing(-3),
        height: 0,
        paddingBottom: '48%',
        borderRadius: spacing(2),
        backgroundColor: '#fff',
        position: 'relative',
        [breakpoints.up('md')]: {
            width: '100%',
            marginLeft: spacing(-3),
            marginTop: 0,
            transform: 'translateX(-8px)',
        },
        '&:after': {
            content: '" "',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: spacing(2), // 16
            opacity: 0.5,
        },
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
}));


function SkyEvents() {
    const styles = useStyles();
    const {
        button: buttonStyles,
        ...contentStyles
    } = useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();

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

    return (
        <div>
            <Container maxWidth='lg' style={{ marginTop: '30px', marginBottom: '15px' }}>
                <Typography variant='h4' align='center' style={{ color: '#333333' }} marginBottom='25px'>
                    SkyEvents
                </Typography>
                <br />
                <br />

                <Grid container spacing={10}>
                    {skyevents.map((skyevent) => (
                        <Grid item lg={6} md={6} sm={12} xs={12} key={skyevent.id}>
                            <Card className={cx(styles.root, shadowStyles.root)}>
                                <CardMedia
                                    className={styles.media}
                                    image={skyevent.imageUrl}
                                />
                                <CardContent>
                                    <TextInfoContent
                                        classes={contentStyles}
                                        heading={skyevent.title}
                                        overline={skyevent.duration}
                                        body={skyevent.description}
                                    />
                                    <Link to={`/skyevents/${skyevent.id}`} target='_blank'  rel='noreferrer' style={{textDecoration: 'none'}}>
                                        <Button
                                            variant='contained'
                                            style={{
                                                backgroundColor: '#333333',
                                                color: '#e1e1e1',
                                                fontSize: '14px',
                                                borderRadius: 10,
                                            }}
                                        >
                                            learn more
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default SkyEvents



