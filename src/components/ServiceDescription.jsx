import React from 'react';
import ServiceDescriptionCard from "./ServiceDescriptionCard";
import Grid from '@mui/material/Grid';
import'./ServiceDescription.css';

const ServiceDescription = () => {
    return (
        <div>
            <h1 className="center-heading" style={{marginTop: '20px', marginBottom: '10px'}}>Service Description</h1>
            <Grid container spacing={2} justifyContent="center" sx={{ padding: '16px 16px' }}> {/* Adjust spacing as needed */}
                <Grid item xs={12} md={12}> {/* Adjust for 2 cards in a row on xs screens */}
                    <ServiceDescriptionCard serviceId={1} serviceName={"Service name"} pictureUrl={"https://media.istockphoto.com/id/970156662/photo/repairing-a-faucet.jpg?s=612x612&w=0&k=20&c=7WXMG0FS1IUuq8eKTTqKkmIkwujPM9pDGombmP71_EE="} serviceDescription ={"Service Description"}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default ServiceDescription;