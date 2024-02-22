import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for navigation
import { Avatar, Box, Button, Container, Stack } from '@mui/material'; // Import necessary MUI components

const ProfilePage = () => {
  const profileImageUrl = 'https://example.com/your-profile-pic.jpg'; // Your profile image URL

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}> {/* Adjust top margin as needed */}
      {/* Profile Image */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}> {/* Adjust bottom margin as needed */}
        <Avatar
          alt="Profile"
          src={profileImageUrl}
          sx={{ width: 120, height: 120 }} // Adjust size as desired
        />
      </Box>

      {/* Link Buttons */}
      <Stack direction="column" spacing={2}> {/* Stack for vertical layout with consistent spacing */}
        <Button variant="contained" fullWidth component={RouterLink} to="/myDocuments">
          My Documents
        </Button>
        <Button variant="contained" fullWidth component={RouterLink} to="/myApartments">
          My Apartments
        </Button>
        <Button variant="contained" fullWidth component={RouterLink} to="/myProfile">
          My Profile
        </Button>
      </Stack>
    </Container>
  );
};

export default ProfilePage;
