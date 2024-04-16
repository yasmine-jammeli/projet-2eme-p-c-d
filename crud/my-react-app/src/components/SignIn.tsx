import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    axios
      .post('http://localhost:3002/login', { email, password })
      .then((result) => {
        console.log(result);
        const message = result.data;
        alert(message);
        if (result.data === 'Login successful! Redirecting to home page.') {
          navigate('/import');
        }
      })
      .catch((err) => console.log(err));
  };

  const validateForm = () => {
    let valid = true;
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError(null);
    }
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError(null);
    }
    return valid;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography component="h1" variant="h1">
              Welcome back!
            </Typography>
          </Box>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                />
              </Grid>
              <Grid container justifyContent="right">
                <Typography component="p" variant="body1">
                  <Link href="#" sx={{ fontFamily: 'Abel' }}>
                    Forgot your password?
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#BE4A31', color: '#FFFFFF' }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
