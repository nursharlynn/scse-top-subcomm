import React, { useState, useEffect } from 'react';
import { Typography, Modal, MobileStepper, Button, TextField, Stack, FormControl, Box, createTheme, ThemeProvider } from '@mui/material';
import login from '../../assets/icons/login.svg';
import icon from "../../assets/icons/icon.svg";
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const theme = createTheme({
  components: {
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          "& .MuiMobileStepper-dots": {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
          },
          "& .MuiMobileStepper-dot": {
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: '#6884b5', 
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '& .MuiButton-label': {
            fontSize: '22px', 
          },
          '& .MuiButton-startIcon, & .MuiButton-endIcon': {
            fontSize: '22px',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f2e3cc',
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-outlined': {
            color: '#d5d5d5',
            '&.Mui-focused': {
              color: '#d5d5d5',
            }
          },
          '& .MuiOutlinedInput-root': {
            borderColor: '#f2e3cc',
            color: '#d5d5d5',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f2e3cc',
              color: '#d5d5d5',
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#f2e3cc',
                color: '#d5d5d5',
              },
            },
          "& .MuiInputLabel-outlined": {
            color: '#d5d5d5',
            '&.Mui-focused': {
              color: '#d5d5d5',
            }
          },
          '& .MuiOutlinedInput-input:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0px 1000px rgba(0, 0, 0, 0) inset !important',
            backgroundColor: '#000000 !important',
            transitionDelay: '9999s', 
            transitionProperty: 'background-color, color',
          },
        },
      },
    },
  },
}
});

const FormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [activeStep, setActiveStep] = React.useState(0);
  const [emails, setEmails] = useState(Array.from({ length: data.num }, () => ''));
  const [open, setOpen] = React.useState(0);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    const isAnyEmailEmpty = emails.some(email => email.trim() === '');
    setDisableButton(isAnyEmailEmpty);
  }, [emails]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleEmailChange = (index, value) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);
  };
  
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false)
    }
  }

  const handleRegister = () => {
    if (!disableButton) {
      setOpen(true);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "sapce-evenly",
      alignItems: "center",
      height: '100vh',
      width: "100%",
      backgroundColor: "black",
      backgroundSize: "cover",
    }}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={'75%'}
        sx={{
          border: '2px solid',
          borderRadius: '8px',
          borderColor: '#f2e3cc66',
          py: '40px',
          px: '24px',
          mt: '6rem'
        }}>
          <Box>
            <img width={'75%'} src={icon} alt="Icon"/>
          </Box>
          <ThemeProvider theme={theme}>
          <FormControl sx={{mt: 6}} fullWidth>
            <Stack direction={'column'} alignItems={'center'}>
              <TextField id={`email-${activeStep}`} label="Email" fullWidth
                value={emails[activeStep]}
                onChange={(e) => handleEmailChange(activeStep, e.target.value)} />
               <MobileStepper
                variant="dots"
                steps={data.num}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1, backgroundColor: 'rgba(0, 0, 0, 0)' }}
                nextButton={
                  <Button onClick={handleNext} disabled={activeStep === data.num-1} sx={{ color: '#FFFFFF' }}>
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button onClick={handleBack} disabled={activeStep === 0} sx={{ color: '#FFFFFF' }}>
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}

                  </Button>
                }
              />
              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width={'100%'}>
                <Button
                  onClick={handleRegister}
                  variant="contained"
                  disabled={disableButton}
                  type='submit'
                  sx={{
                    borderRadius: '10px',
                    fontSize: '18px',
                    py: '10px',
                    px: '3.5rem',
                    width: '30%',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    color: '#000000',
                    backgroundColor: '#f2e3cc',
                    ':hover': {
                      bgcolor: '#f2e3cc4d',
                    },
                  }}
                > Register
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}>
                    <Box display="flex" flexDirection="column" gap={3} sx={{ 
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60%',
                      bgcolor: 'black',
                      border: '2px solid #000',
                      boxShadow: 24,
                      p: 4,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center' }}>
                      <Box display="flex" justifyContent="center" alignItems='center'>
                        <CheckCircle color='success' fontSize='large'/>
                        <Typography id="modal-modal-title"
                          sx={{ color: '#f2e3cc',
                            fontWeight: 600,
                            fontSize: '1.2rem',
                            justifyContent: 'center',
                            textAlign: 'center',
                            ml: '0.5rem',
                            '&.Mui-focused': {
                                color: '#000000',
                                fontWeight: 600,
                                fontSize: '1.2rem',
                                justifyContent: 'center',
                            },
                          }}>
                          The accounts have been successfully created.
                        </Typography>
                      </Box>
                      <Button
                        onClick={() => navigate("/dashboard", { state: {emails} })}
                        variant="contained"
                        sx={{
                          borderRadius: '10px',
                          fontSize: '18px',
                          py: '10px',
                          width: '30%',
                          fontWeight: 'bold',
                          textTransform: 'capitalize',
                          color: '#000000',
                          backgroundColor: '#f2e3cc',
                          ':hover': {
                            bgcolor: '#f2e3cc4d',
                          },
                        }}
                        > Next
                      </Button>
                    </Box>
                </Modal>
              </Box>
            </Stack>
          </FormControl>
          </ThemeProvider>
          </Box>
          <ThemeProvider theme={theme}>
          <Box sx={{ mt: 4 }}>
            <img src={login} alt="MOCK WEB'24" />
          </Box>
        </ThemeProvider>
    </div>
  )
}

export default FormPage