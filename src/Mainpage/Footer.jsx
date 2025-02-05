// Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#24292e',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Campus Locator. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Built with ❤️ using{' '}
        <Link href="https://reactjs.org/" target="_blank" color="inherit" underline="hover">
          React
        </Link>{' '}
        &{' '}
        <Link href="https://mui.com/" target="_blank" color="inherit" underline="hover">
          Material-UI
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
