import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const ServiceDescriptionCard = ({serviceId, serviceName, pictureUrl, serviceDescription}) => {

  return (
    <Card sx={{ maxWidth: "750px"}}>
      <CardHeader
        title={serviceName}
      />
      <CardMedia
        component="img"
        height="194"
        image={pictureUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {serviceDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Schedule Service</Button>
      </CardActions>
    </Card>
  );
}

export default ServiceDescriptionCard