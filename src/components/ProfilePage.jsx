import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Box, Button, Container, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { getDbData } from '../utilities/firebase'; // Ensure this is correctly imported

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(''); // Manage phone number with state

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem('userPhoneNumber'); // Retrieve phone number from local storage
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber); // Update state
      const fetchData = async () => {
        const data = await getDbData(`/users/${storedPhoneNumber}`);
        setProfileData(data);
      };
      fetchData();
    }
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Avatar
          alt="Profile"
          src={profileData?.profileImageUrl || 'https://firebasestorage.googleapis.com/v0/b/ezapartments-a35e6.appspot.com/o/defaultProfilePic.webp?alt=media&token=34431a3f-1252-47e8-b80a-46533bed71ed'} // Fallback to a default image if none is provided
          sx={{ width: 120, height: 120 }}
        />
      </Box>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            My Profile
          </Typography>
          <Typography variant="body1">
            Email Address: {profileData?.email || 'Loading...'}<br/>
            Age: {profileData?.age || 'Loading...'}<br/>
            Phone Number: {phoneNumber || 'Loading...'}<br/>
          </Typography>
          <Button component={RouterLink} to="/myprofile">
            Edit Information
          </Button>
        </CardContent>
      </Card>

      <Stack direction="column" spacing={2}>
        {/* Buttons */}
      </Stack>
    </Container>
  );
};

export default ProfilePage;
