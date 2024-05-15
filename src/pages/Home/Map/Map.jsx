import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
const Map = () => {
  return (
    <div className="w-10/12 lg:w-4/5 mx-auto my-10 ">
      <div className="text-center space-y-4 flex flex-col items-center mb-6">
        <h3 className="text-3xl font-bold text-[#199DFF]">
          Explore Our Location
        </h3>
        <p className=" max-w-screen-lg">
          Discover our prime location on the map and immerse yourself in the
          vibrant surroundings of Coxs Bazar, Bangladesh.
        </p>
      </div>

      <MapContainer
        center={[21.4272, 92.0058]}
        zoom={15}
        scrollWheelZoom={true}
        className="h-[450px] w-full border-4 rounded-xl border-[#a5d8ff]"
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
