import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const TopBanner = () => {
  const location = useLocation();

  const getPageName = (pathname) => {
    // Define static page names
    const pageNames = {
      '/': 'Home',
      '/services': 'Services',
      '/chat': 'Chat',
      '/profile': 'My Profile',
      '/myprofile': 'Sign Up',
      '/schedule': 'Schedule',
      // Add other static routes as needed
    };

    // Check for dynamic service description paths
    if (pathname.startsWith('/serviceDescription/')) {
      return 'Service Description'; // Return a generic title or potentially extract and use the ID
    }

    // Return the page name for static routes or 'Unknown Page' if not found
    return pageNames[pathname] || 'Unknown Page';
  };

  const currentPageName = getPageName(location.pathname);

  return (
    <AppBar position="sticky" sx={{ top: 0, backgroundColor: '#2a7646ff', zIndex: 1100 }}>
      <Toolbar sx={{ justifyContent: 'center', display: 'flex' }}>
        <Box sx={{ position: 'absolute', left: 0, display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ezapartments-a35e6.appspot.com/o/Tenny.png?alt=media&token=6fb4668f-d562-498b-a6f0-61069c3acb34"
            alt="Logo"
            style={{ height: '30px' }}
          />
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {currentPageName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBanner;
