import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto my-10">
      <MapContainer
        center={[21.4272, 92.0058]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-96 w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[21.4272, 92.0058]}>
          <Popup>
            StayInn
            <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
