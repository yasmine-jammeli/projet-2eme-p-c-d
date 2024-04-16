import React from 'react';
import '../css/account.css';
import Donna from '../assets/donna.jpg';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MyAccountUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container">
        <div className="employee">
          <img src={Donna} alt="EmployeeImage" />
          <div className='info'>
            <h1>Donna Specter</h1>
            <p> Legal secretary</p>
          </div>
        </div>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Phone number
            </Typography>
            <TextField
                required
                fullWidth
                id="num"
                label="ffnfnf"
                name="number"
                autoComplete="phone number"
            />
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                New password
            </Typography>
            <TextField
                required
                fullWidth
                id="password"
                label="ffnfnf"
                name="password"
                autoComplete="password"
            />
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Confirm New password
            </Typography>
            <TextField
                required
                fullWidth
                id="password"
                label="ffnfnf"
                name="password"
                autoComplete="password"
            />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}><Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#5D5D60',
                    color: '#FFFFFF',
                    width: '200px', // Set width
                    height: '50px' // Set height
                }}
                >
                Save
                </Button>
                </Box>
        </Box>
      </div>
  );
}

export default MyAccountUser;
