import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const customIcon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const MapPage = () => {


    return(
        <div>
            <MapContainer
                center={[40, -83]}
                zoom={10}
                style={{ height: "1000px", width: "100%" }}

            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[40, 83]} icon={customIcon}>
                    <Popup>
                        <div className="card" style={{ width: '10rem' }}>
                            <img src={"https://media.istockphoto.com/id/153011771/photo/cheerful-senior-man.jpg?s=612x612&w=0&k=20&c=BYpISz7fcryegrzbLGVv9pqu7ENRyEKw9QqMxfp4ahw="} className="card-img-top" alt="Trip photo" width="150" height="150"/ >
                            <p>Joe, Age 62</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                            </div>
                        </div>
                    </Popup>
                </Marker> 
 
            </MapContainer>
        </div>
    )
}

export default MapPage;