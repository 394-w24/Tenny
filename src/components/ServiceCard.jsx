import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ServiceCard = ({ serviceId, serviceName, pictureUrl }) => {

  const fontSize = serviceName.length > 20 ? '1.1rem' : '1.1rem';
  // Wrap the Card component with Link
  // You might need to adjust the URL path according to your routing setup
  return (
    <Link to={`/services/${serviceId}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 285, cursor: 'pointer' }}> {/* Adjust the width as needed */}
        <CardMedia
          component="img"
          height="140"
          image={pictureUrl}
          alt="service photo"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ fontSize }}>
            {serviceName}
          </Typography>
          {/* If you need to add more content or actions, you can do so here */}
        </CardContent>
      </Card>
    </Link>
  )
};

export default ServiceCard;
