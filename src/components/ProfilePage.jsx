import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for navigation
import { Avatar, Box, Button, Container, Stack } from '@mui/material'; // Import necessary MUI components
import Card from 'react-bootstrap/Card';

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

      <Card style={{ width: '400px', marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>My Profile</Card.Title>
        <Card.Text>
          Email Address: johndoe@gmail.com <br/>
          Age: 25 <br/>
          Phone Number: 1234567890 <br/>
        </Card.Text>
        <Card.Link href="#">Edit Information</Card.Link>
      </Card.Body>
    </Card>

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
