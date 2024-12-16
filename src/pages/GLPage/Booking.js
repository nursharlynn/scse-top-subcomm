import React, { useState } from 'react'
import { Modal, Radio, Box, Button, createTheme, ThemeProvider, Typography } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const title = createTheme({
  typography: {
    fontFamily: [
      'Germania One',
      'system-ui',
    ].join(','),
  },
});

const rows = [
    { id: 1, location: "Sports Hub" },
    { id: 2, location:  "Gymnasium" },
];

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(0);
  const [selectionModel, setSelectionModel] = useState(0);

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false)
    }
  }

  const handleRegister = () => {
    setOpen(true);
  };
  const handleChange = (id) => {
    setSelectionModel(id);
  };

  const columns = [
    {
      field: "radiobutton",
      headerName: "",
      weight: 100,
      sortable: false,
      renderCell: (params) => (
        <Radio 
        key={params.id}
        checked={params.id === selectionModel}
        onChange={() => handleChange(params.id)}
        value={params.id}
        sx={{
            color: "#FFFFFF"
        }}
      />
      )
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      headerClassName: 'header-name',
    },
  ];

  const selectedRow = rows.filter((item) => {
    return item.id === selectionModel;
  });

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "black",
      backgroundSize: "cover",
    }}>
      <Box
        display="flex" 
        flexDirection="column" 
        justifyContent="flex-end" 
        alignItems="center" 
        gap={3}
        width="100vw">
          <ThemeProvider theme={title}>
            <Typography sx={{mt: 10, mr: 3, ml: 3, fontFamily: 'Rubik', fontWeight: 600}} fontSize='1.5rem' color='#FFFFFF'>You can only book one facility at a time</Typography>
          </ThemeProvider>
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            selectionModel={selectionModel}
            onSelectionModelChange={(newSelectionModel) => {
                setSelectionModel(newSelectionModel);
            }}
            sx={{ 
                color: '#FFFFFF',
                fontFamily: 'Rubik', 
                fontWeight: 600,
                maxWidth: 500,
                width: "90vw",
                fontSize: '1rem',
                "& .header-name": {
                    color: '#000000',
                },
                "& .MuiTablePagination-displayedRows": {
                  color: '#FFFFFF',
                  fontFamily: 'Rubik', 
                  fontWeight: 600,
                  fontSize: '1rem',
                  width: "100%",
                  marginRight: "2rem"
                },
                "& .MuiTablePagination-actions": {
                  display: "none"
                }
            }}
            />
            <Box sx={{ justifyContent: 'flex-end', display: 'flex', width: '100%' }}>
              <Button
                  onClick={handleRegister}
                  variant="contained"
                  sx={{
                    borderRadius: '10px',
                    px: '1.25rem',
                    py: '0.75rem',
                    textTransform: 'capitalize',
                    fontSize: '22px',
                    backgroundColor: '#f2e3cc',
                    color: '#000000',
                    fontFamily: 'Rubik',
                    mr: '1rem',
                    fontWeight: 600, 
                    ':hover': {
                      bgcolor: '#deb97dcf',
                    },
                  }}>Book</Button>
            </Box>
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
                            fontSize: '1rem',
                            justifyContent: 'center',
                            ml: '0.5rem',
                            textAlign: 'center',
                            '&.Mui-focused': {
                                color: '#000000',
                                fontWeight: 600,
                                fontSize: '1.2rem',
                                justifyContent: 'center',
                            },
                          }}>
                          The facility has been successfully booked.
                        </Typography>
                      </Box>
                      <Button
                        onClick={() => navigate("/dashboard")}
                        variant="contained"
                        sx={{
                          borderRadius: '10px',
                          fontSize: '1rem',
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
    </div>
  )
}

export default Booking