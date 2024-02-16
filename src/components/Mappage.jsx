import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useDbData } from '../utilities/firebase';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

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

    const buddies = useDbData("buddies/");

    console.log("buddy list");
    console.log(buddies);

    if(buddies[0] === undefined) {
      return (<div></div>)
    }

    const buddyArray = Object.values(buddies[0])
    console.log("buddy array")
    console.log(buddyArray)

    const locations = {}

    Object.entries(buddies[0]).map(([buddyId, buddy]) => {
      if (locations[buddy.latitude + ":" + buddy.longitude]){
        console.log(locations)
        locations[buddy.latitude + ":" + buddy.longitude].push({buddyId, buddy})
      }else{
        console.log(locations)
        locations[buddy.latitude + ":" + buddy.longitude] = [{buddyId, buddy}]
      }
    })
    return(
        <div>
            <MapContainer
                center={[42.048860, -87.679890]}
                zoom={10}
                style={{ height: "1000px", width: "100%" }}

            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {Object.values(locations).map(buddies => (
                    <Marker position={[buddies[0].buddy.latitude, buddies[0].buddy.longitude]} icon={customIcon}>
                        <Popup>
                        {/* <Carousel> */}
                            {buddies.map(buddy => (
                                    // <Carousel.Item>
                                        <div className="card" style={{ width: '18rem' }}>
                                        {/* <Trip key={trip.tripId} tripId={trip.tripId} trip={trip.trip} simpleView={true}/> */}
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={buddy.buddy.image_url} />
                                                <Card.Body>
                                                    <Card.Title>{buddy.buddy.name}</Card.Title>
                                                    <Card.Text>
                                                        Age: {buddy.buddy.age}<br/>
                                                        Ethinicity: {buddy.buddy.ethinicity}<br/>
                                                        Rating: {buddy.buddy.rating}/5.0<br/>
                                                        # Favours: {buddy.buddy.favor_count}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    // </Carousel.Item>
                            ))}
                            {/* </Carousel> */}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default MapPage;