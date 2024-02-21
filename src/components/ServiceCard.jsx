import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ServiceCard = ({ serviceId, serviceName, pictureUrl, simpleView }) => (
  <Card sx={{ maxWidth: 285 }}> {/* Adjust the width as needed */}
    {/* Adjust the height as needed */}
    <CardMedia
      component="img"
      height="140"
      image={pictureUrl}
      alt="service photo"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {serviceName}
      </Typography>
      {/* If you need to add more content or actions, you can do so here */}
    </CardContent>
  </Card>
);

export default ServiceCard;
