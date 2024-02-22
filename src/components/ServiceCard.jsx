import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ServiceCard = ({serviceId, serviceName, pictureUrl, serviceDescription}) => {

  const navigate = useNavigate()
  const handleClick = () => {
    console.log("clicked")
    navigate('/serviceDescription/'+ serviceId)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          image={pictureUrl}
          alt={serviceName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {serviceName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {serviceDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ServiceCard