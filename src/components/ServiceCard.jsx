import * as React from 'react';
import { CardActionArea, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Styled components for custom styling
const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  maxWidth: 345,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: 'none', // Remove shadow
}));

const Image = styled('img')({
  height: 140,
  width: '100%',
  objectFit: 'cover', // Adjust as needed
  borderRadius: '8px 8px 0 0', // Rounded corners at the top
});

const ServiceCard = ({ serviceId, serviceName, pictureUrl, serviceDescription }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (serviceDescription.length > 0) {
      navigate('/serviceDescription/' + serviceId);
    } else {
      console.log("No service description");
    }
  };

  return (
    <StyledCardActionArea onClick={handleClick}>
      <Image src={pictureUrl} alt={serviceName} />
      <Typography 
        gutterBottom 
        variant="h6" 
        component="div" 
        sx={{
          fontFamily: "'Lexend', sans-serif", // Ensure Lexend font is loaded in your project
          color: '#333', // Dark grey
          padding: '8px',
        }}>
        {serviceName}
      </Typography>
      {/* Consider adding serviceDescription here if needed, with appropriate styling */}
    </StyledCardActionArea>
  );
}

export default ServiceCard;