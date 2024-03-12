import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Banner = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigate based on newValue
    switch (newValue) {
      case 0: // Service
        navigate('/services');
        break;
      case 1: // Chat
        navigate('/chat');
        break;
      case 2: // Profile or any other navigation
        // Check if the user's phone number is stored in local storage
        const userPhoneNumber = localStorage.getItem('userPhoneNumber');
        
        if (userPhoneNumber) {
          // If a phone number exists, navigate to the profile page
          navigate('/profile');
        } else {
          // If no phone number is found, navigate to the myprofile page (sign-up page)
          navigate('/myprofile');
        }
        break;
      // Add more cases as needed for additional navigation items
      default:
        break; // Default case if none of the above matches
    }
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 100 }} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange} // Use the handleChange function
        style={{color:'#2a7646ff'}}
      >
        <BottomNavigationAction label="Service" icon={<HomeRepairServiceIcon />}/>
        <BottomNavigationAction label="Chat" icon={<ChatIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Banner;
