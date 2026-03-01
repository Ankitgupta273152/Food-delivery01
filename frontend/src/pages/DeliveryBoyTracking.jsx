import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import home from "../assets/home.png";
import scooter from "../assets/scooter.png";

// ✅ Custom icons
const deliveryBoyIcon = new L.Icon({
  iconUrl: scooter,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const customerIcon = new L.Icon({
  iconUrl: home,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function DeliveryBoyTracking({ currentOrder }) {
  if (!currentOrder) return <p>No current active order</p>;

  // ✅ Get coords safely
  const deliveryLat = currentOrder?.deliveryBoyLocation?.lat;
  const deliveryLng = currentOrder?.deliveryBoyLocation?.lng;
  const customerLat = currentOrder?.customer?.lat;
  const customerLng = currentOrder?.customer?.lng;

  const center =
    deliveryLat && deliveryLng ? [deliveryLat, deliveryLng] : [28.6139, 77.209];

  // ✅ Path between delivery boy and customer
  const path =
    deliveryLat && deliveryLng && customerLat && customerLng
      ? [
          [deliveryLat, deliveryLng],
          [customerLat, customerLng],
        ]
      : [];

  return (
    <div className="w-full h-[400px] mt-3 rounded-xl overflow-hidden shadow-md">
      <MapContainer center={center} zoom={14} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Delivery Boy Marker */}
        {deliveryLat && deliveryLng && (
          <Marker position={[deliveryLat, deliveryLng]} icon={deliveryBoyIcon}>
            <Popup>Delivery Boy</Popup>
          </Marker>
        )}

        {/* Customer Marker */}
        {customerLat && customerLng && (
          <Marker position={[customerLat, customerLng]} icon={customerIcon}>
            <Popup>Customer</Popup>
          </Marker>
        )}

        {/* Path */}
        {path.length > 0 && <Polyline positions={path} color="blue" weight={4} />}
      </MapContainer>
    </div>
  );
}
