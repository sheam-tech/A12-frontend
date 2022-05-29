import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Leaflet.css";

const Leaflet = () => {
  return (
    <div>
      <div className="leaflet-container">
        <MapContainer
          center={[23.7937484432,90.4048576066]}
          zoom={14}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.7937484432,90.4048576066]}>
            <Popup>Level-4, 34, Awal Centre, Banani, Dhaka</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Leaflet;
