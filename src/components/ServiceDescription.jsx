import React from 'react';
import ServiceDescriptionCard from "./ServiceDescriptionCard";
import Grid from '@mui/material/Grid';
import'./ServiceDescription.css';
import { useParams } from 'react-router-dom';

const ServiceDescription = () => {
    const serviceId = useParams();
    return (
        <div>
            <h1 className="center-heading" style={{marginTop: '20px', marginBottom: '10px'}}>Service Description</h1>
            <Grid container spacing={2} justifyContent="center" sx={{ padding: '16px 16px' }}> {/* Adjust spacing as needed */}
                <Grid item xs={12} md={12}> {/* Adjust for 2 cards in a row on xs screens */}
                    <ServiceDescriptionCard serviceId = {serviceId.id} />
                </Grid>
            </Grid>
        </div>
    );
}

export default ServiceDescription;