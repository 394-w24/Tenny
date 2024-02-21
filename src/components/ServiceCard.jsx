import React from 'react';
import { Link } from "react-router-dom";
import "./ServiceCard.css";

  const ServiceCard = ({ serviceId, serviceName, pictureUrl, simpleView }) => (

    <div className="card" style={{ width: '18rem' }}>
      <img src = {pictureUrl} className = "card-img-top" alt = "service photo"/>
      <div className="card-body">
        <div className="card-title">
          {serviceName}
        </div>
      </div>
    </div>
    );


  export default ServiceCard;