import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const data = [
  {
      serviceName : "Alumni Connect",
      pictureUrl: "https://alumni.wharton.upenn.edu/wp-content/uploads/2019/02/Untitled-1.png",
      serviceDescription : "Click through our list of verified alumni to get personalized guidance on anything related to life as an international student.",
  },
  {
      serviceName : "Virtual Tour",
      pictureUrl: "https://reslife.media.uconn.edu/wp-content/uploads/sites/3384/2022/12/virtual-tour-icon.png",
      serviceDescription : "Need to tour your apartment choices remotely? \nNo problem with our virtual tour-guide, just select your desired apartment listings and click Virtual Tour to be connected with a virtual leasing agent who can show you around.",
  },
  {
      serviceName : "Neighborhood Check",
      pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVRZXTiWex0tHo21eZ0z54M98erYJcp0omA&usqp=CAU",
      serviceDescription : "Want to know more about your new neighborhood? \nType in your new address and select from the list of culturally relevant neighborhood reports to learn about customs, safety, local groceries, and more!",
  },
  {
      serviceName : "Leasing Application Assistance",
      pictureUrl: "https://static.thenounproject.com/png/3605911-200.png",
      serviceDescription : "Getting stuck on the leasing application process? \nIt’s no problem with Tenny! \nClick the link to be connected with a Tenny team member who will help you understand and complete your application, so you can stress less about the process and start dreaming about your new apartment!",
  },
  {
      serviceName : "Move In",
      pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzkZQCQKf4Lc06wvPqoJnGa6-iL847pmgcg&usqp=CAU",
      serviceDescription : "Feeling lost about the big move-in day? \nClick over to be connected with a Tenny team member who will give you personalized guidance, mover recommendations, and furniture resources.",
  }
]

const ServiceDescriptionCard = ({serviceId}) => {
  return (
    <Card sx={{ maxWidth: "750px"}}>
      <CardHeader
        title={data[serviceId - 1].serviceName}
      />
      <CardMedia
        component="img"
        height="194"
        image={data[serviceId - 1].pictureUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data[serviceId - 1].serviceDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Schedule Service</Button>
      </CardActions>
    </Card>
  );
}

export default ServiceDescriptionCard