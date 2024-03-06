import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const TopBanner = () => {
  const location = useLocation();

  const pageNames = {
    '/': 'Home',
    '/services': 'Services',
    '/chat': 'Chat',
    '/profile': 'My Profile',
    '/serviceDescription/:id': 'Service Description',
    '/myprofile': 'Sign Up',
    '/schedule': 'Schedule',
    // Add other routes as needed
  };

  const currentPageName = pageNames[location.pathname] || 'Unknown Page';

  return (
    <AppBar position="sticky" sx={{ top: 0, backgroundColor: '#2a7646ff', zIndex: 1100 }}>
      <Toolbar sx={{ justifyContent: 'center', display: 'flex' }}>
        <Box sx={{ position: 'absolute', left: 0, display: 'flex', alignItems: 'center', marginLeft: '20px', height: { xs: '30px', sm: '50px' } }}>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ezapartments-a35e6.appspot.com/o/Tenny.png?alt=media&token=6fb4668f-d562-498b-a6f0-61069c3acb34"
                alt="Logo"
                style={{ height: 'inherit' }} // Use inherit to take height from parent Box
            />
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          {currentPageName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBanner;
