import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Banner = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigate based on newValue
    switch (newValue) {
      case 0: // Service
        navigate('/service');
        break;
      case 1: // Chat
        navigate('/chat');
        break;
      case 2: // Profile or any other navigation
        navigate('/profile'); // Adjust the route as per your application's routing
        break;
      // Add more cases as needed for additional navigation items
      default:
        break; // Default case if none of the above matches
    }
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 100 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange} // Use the handleChange function
      >
        <BottomNavigationAction label="Service" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Chat" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Banner;
