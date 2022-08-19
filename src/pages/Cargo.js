import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Grid, TextField, Button, Typography, Card, CardContent, MenuItem } from '@mui/material';
import { Helmet } from 'react-helmet';
import MuiPhoneNumber from 'material-ui-phone-number';


import background from '../assets/images/homepage/slide8.jpg';

const places = [
    {
        value: 'SA',
        label: 'South Africa',
    },
    {
        value: 'USA',
        label: 'United States',
    },
    {
        value: 'ZIM',
        label: 'Zimbabwe',
    },
];

const Cargo = () => {
    const [loader, setLoader] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [from, setFrom] = useState('USA');
    const [to, setTo] = useState('ZIM');
    const [description, setDescription] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        await addDoc(collection(db, 'cargo-reservations'), {
            createdAt: new Date(),
            name: name,
            email: email,
            phone: phone,
            from: from,
            to: to,
            description: description

        })
            .then(() => {
                setLoader(false);
                alert('Submission successful, we will get back to you');
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName('');
        setEmail('');
        setPhone('');
        setFrom('');
        setTo('');
        setDescription('');
    };


    return (
        <div style={{ marginTop: '-80px', backgroundImage: `url(${background})` }}>
            <Helmet>
                <title>Cargo | SkyAngel</title>
            </Helmet>
            <br />
            <br />
            <Grid>
                <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '50px auto', backgroundColor: '#e1e1e1' }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ fontSize: '1.7rem', fontWeight: 'bold' }} align='center'>
                            Cargo Delivery
                        </Typography>
                        <Typography variant='subtitle2' color='textSecondary' component='p' gutterBottom align='center'>
                            We deliver to and from destinations such as Zimbabwe, South Africa,
                            and the US. Fill in the basics of your cargo and we'll get back to you.
                        </Typography>
                        <form onSubmit={handleSubmit} >
                            <Grid container spacing={1.3}>
                                <Grid xs={12} sm={12} item>
                                    <TextField
                                        placeholder='Enter name'
                                        label='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        variant='outlined'
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type='email'
                                        placeholder='Enter email'
                                        label='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        variant='outlined'
                                        fullWidth required
                                    />
                                </Grid>
                                <Grid item xs={12} marginTop='5px'>
                                    <MuiPhoneNumber
                                        defaultCountry={'us'}
                                        fullWidth
                                        required
                                        value={phone}
                                        onChange={(value) => setPhone(value)}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        select
                                        label="From"
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                        fullWidth
                                        required
                                    >
                                        {places.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        select
                                        label="To"
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                        fullWidth
                                        required
                                    >
                                        {places.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        placeholder='cargo description'
                                        label='Description'
                                        multiline
                                        fullWidth required
                                        rows={2}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type='submit'
                                        variant='contained'
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
                    </CardContent>
                </Card>
                <br />
                <br />
            </Grid>
        </div>
    )
}

export default Cargo;





