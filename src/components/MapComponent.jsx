import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ lat, lng }) => {
  const mapRef = useRef(null); // Ref for the map instance
  const containerRef = useRef(null); // Ref for the map container

  useEffect(() => {
    // Check if mapRef is already initialized
    if (!mapRef.current) {
      // Initialize the map
      mapRef.current = L.map(containerRef.current).setView([lat, lng], 13);

      // Add the tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);

      // Add a marker
      L.marker([lat, lng]).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        // Properly clean up the map instance
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "400px" }}
      id="map-container"
    ></div>
  );
};

export default MapComponent;
