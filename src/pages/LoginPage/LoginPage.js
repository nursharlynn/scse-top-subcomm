import React from 'react'
import { Button, TextField, Stack, FormControl, Box, createTheme, ThemeProvider } from '@mui/material';
import logo from '../../assets/icons/login.svg';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e6ac8b',
            },
            '&:hover fieldset': {
              borderColor: '#e6ac8b',
              borderWidth: '0.15rem',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#e6ac8b',
            },
          },
        },
      },
    },
  }
})

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: '100vh',
      backgroundColor: "black",
      backgroundSize: "cover",
    }}>
      <ThemeProvider theme={theme}>
      <FormControl
        fullWidth
        sx ={{mt: 8}}>
        <Stack
          direction={'column'}
          alignItems={'center'}
          spacing={3}>
            <TextField
              id="outlined-basic"
              label="NTU Email"
              sx={{ width: "75%"}}>
            </TextField>
            <TextField
              id="outlined-password-input"
              label="Password"
              sx={{ width: "75%"}}>
            </TextField>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="contained"
              sx={{
                borderRadius: '30px',
                px: '38px',
                width: '50%',
                letterSpacing: 4,
                fontWeight: 'bold',
                backgroundColor: '#e6ac8b', 
                ':hover': {
                  bgcolor: '#e6ac8b',
                },
                }}>Sign In</Button>
      </Stack>
    </FormControl>
    <Box sx={{mt: 6}}>
    <img src={logo} alt="MOCK WEB'24"/>
    </Box>
    </ThemeProvider>
    </div>
  )
}

export default LoginPage