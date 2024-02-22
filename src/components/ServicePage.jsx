import React from 'react';
import ServiceCard from "./ServiceCard";
import Grid from '@mui/material/Grid';
import './ServicePage.css'

const ServicePage = () => {
  return (
    <>
    <div className ='center-heading'>
      <h1 style={{marginTop: '20px', marginBottom: '10px'}}>Services</h1>
    </div>
    <Grid container spacing={2} justifyContent="center" sx={{ padding: '0 16px' }}> {/* Adjust spacing as needed */}
      <Grid item xs={6} sm={6} md={4} lg={4}> {/* Adjust for 2 cards in a row on xs screens */}
        <ServiceCard serviceId={1} serviceName={"Fix the Faucet"} pictureUrl={"https://media.istockphoto.com/id/970156662/photo/repairing-a-faucet.jpg?s=612x612&w=0&k=20&c=7WXMG0FS1IUuq8eKTTqKkmIkwujPM9pDGombmP71_EE="} serviceDescription ={""}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Virtual Tour"} pictureUrl={"https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-02/woman%20using%20vr%20headset%20for%20virtual%20tourism.jpg?h=140710cd&itok=ucZbNBiP"} serviceDescription ={""}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Leasing app"} pictureUrl={"https://files.consumerfinance.gov/f/images/rental_assistance.width-800.jpg"} serviceDescription ={""}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Move in"} pictureUrl={"https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Low%20Income%20Moving%20Assistance/low-income-moving-assistance-hero.jpg"} serviceDescription ={""}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Neighborhood"} pictureUrl={"https://static.wikia.nocookie.net/firemansam/images/9/98/N.W.TitleCard.jpeg/revision/latest?cb=20160902203143"} serviceDescription ={""}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Fix the lights"} pictureUrl={"https://media.istockphoto.com/id/970156662/photo/repairing-a-faucet.jpg?s=612x612&w=0&k=20&c=7WXMG0FS1IUuq8eKTTqKkmIkwujPM9pDGombmP71_EE="} serviceDescription ={""}/>
      </Grid>
    </Grid>
    </>
  );
}

export default ServicePage;
