import React from 'react';
import ServiceCard from "./ServiceCard";
import Grid from '@mui/material/Grid';

const ServicePage = () => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ padding: '0 16px' }}> {/* Adjust spacing as needed */}
      <Grid item xs={6} sm={6} md={4} lg={4}> {/* Adjust for 2 cards in a row on xs screens */}
        <ServiceCard serviceId={1} serviceName="Fix the Faucet" pictureUrl="https://media.istockphoto.com/id/970156662/photo/repairing-a-faucet.jpg?s=612x612&w=0&k=20&c=7WXMG0FS1IUuq8eKTTqKkmIkwujPM9pDGombmP71_EE="/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={2} serviceName="Virtual Tour guide" pictureUrl="https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-02/woman%20using%20vr%20headset%20for%20virtual%20tourism.jpg?h=140710cd&itok=ucZbNBiP"/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={3} serviceName="Leasing application assistance" pictureUrl="https://files.consumerfinance.gov/f/images/rental_assistance.width-800.jpg"/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={4} serviceName="Move in assistance" pictureUrl="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Low%20Income%20Moving%20Assistance/low-income-moving-assistance-hero.jpg"/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={5} serviceName="Neighborhood watchout" pictureUrl="https://static.wikia.nocookie.net/firemansam/images/9/98/N.W.TitleCard.jpeg/revision/latest?cb=20160902203143"/>
      </Grid>
    </Grid>
  );
}

export default ServicePage;
