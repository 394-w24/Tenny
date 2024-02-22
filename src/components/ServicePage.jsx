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
        <ServiceCard serviceId={1} serviceName={"Fix the lights"} pictureUrl={""} serviceDescription ={"fdjfhehr"}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Fix the lights"} pictureUrl={""} serviceDescription ={"fdjfhehr"}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Fix the lights"} pictureUrl={""} serviceDescription ={"fdjfhehr"}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Fix the lights"} pictureUrl={""} serviceDescription ={"fdjfhehr"}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Fix the lights"} pictureUrl={""} serviceDescription ={"fdjfhehr"}/>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <ServiceCard serviceId={1} serviceName={"Fix the lights"} pictureUrl={""} serviceDescription ={"fdjfhehr"}/>
      </Grid>
    </Grid>
    </>
  );
}

export default ServicePage;
