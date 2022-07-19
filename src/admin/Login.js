import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                navigate('/admin/dashboard')
            })
            .catch((error) => {
                setError(true)
            });

    };

    return (
        <div style={{ height: '50vh', alignItems: 'center', justifyContent: 'center' }}>
            <Grid>
                <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '50px auto', backgroundColor: '#e1e1e1' }}>
                    <CardContent>
                        {error && <span style={{ marginTop: '15px', color: 'red', fontSize: '20px' }}>Incorrect email/password! </span>}
                        <form onSubmit={handleLogin}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        type='email'
                                        placeholder='Enter email'
                                        label='Email'
                                        name='email'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type='password'
                                        placeholder='Password'
                                        label='Password'
                                        name='password'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Grid>

                                <Button type='submit'
                                    variant='contained'
                                    style={{
                                        backgroundColor: '#333333',
                                        color: '#e1e1e1',
                                        fontSize: '14px',
                                        borderRadius: 10,
                                    }}
                                >
                                    Login
                                </Button>
                                <br />
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div >
    )
}

export default Login