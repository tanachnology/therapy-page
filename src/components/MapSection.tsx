import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configura el ícono del marcador
const markerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const MapSection: React.FC = () => {
  const position: [number, number] = [40.7128, -74.0060]; // Reemplaza con la latitud y longitud de tu consultorio

  const handleMarkerClick = () => {
    window.open('https://www.google.com/maps?q=40.7128,-74.0060', '_blank'); // Reemplaza con la URL de Google Maps de tu consultorio
  };

  return (
    <div className="h-96 w-full">
      <MapContainer center={position} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon} eventHandlers={{ click: handleMarkerClick }}>
          <Popup>
            Mi Consultorio
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;