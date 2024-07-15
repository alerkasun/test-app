import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import truckIcon from '../icons/truckIcon'; 

const MapComponent = ({ foodTrucks }) => {
  const position = [37.7749, -122.4194];


  return (
    <MapContainer center={position} zoom={13} style={{ height: '90vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {foodTrucks.map(truck => (
        <Marker key={truck.id} position={[truck.latitude, truck.longitude]} icon={truckIcon}>
          <Popup>
            Name:{truck.name}<br />
            Address: {truck.address}<br />
            Food Items: {truck.food_items}<br />
            {truck.dayshours && (<>
              Working hours: {truck.dayshours}
            </>)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
