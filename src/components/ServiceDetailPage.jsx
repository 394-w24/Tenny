import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailPage = () => {
  // Extract the serviceId from the URL
  const { serviceId } = useParams();

  // Here you would fetch or determine the details of the service based on serviceId.
  // For demonstration, let's just display the serviceId.
  // In a real app, you might fetch service details from a server or a local store.

  return (
    <div>
      <h2>Service Detail Page</h2>
      <p>This is the detail for service ID: {serviceId}</p>
      {/* Display your service details here based on the fetched or determined data */}
    </div>
  );
};

export default ServiceDetailPage;
