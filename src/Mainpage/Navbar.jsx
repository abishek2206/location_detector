// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const navLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  marginLeft: '20px',
  transition: '0.3s',
  '&:hover': { color: '#ff9800' },
};

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#24292e' }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Campus Locator
        </Typography>
        <Box>
          <Button component={Link} to="/home" sx={navLinkStyle}>
            Home
          </Button>
          <Button component={Link} to="/staff-locator" sx={navLinkStyle}>
            Staff Locator
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
