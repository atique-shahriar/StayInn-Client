import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedRoomCard from "./FeaturedRoomCard";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/rooms").then((res) => {
      console.log(res.data);
      setRooms(res.data);
    });
  }, []);
  console.log(rooms);

  let sixRooms = rooms;

  if (sixRooms.length > 6) {
    sixRooms = rooms.slice(0, 6);
  }

  return (
    <div className="w-10/12 lg:w-3/4 mx-auto my-10 space-y-8">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-[#199DFF]">
          Luxury Room Showcase
        </h3>
        <p className=" max-w-screen-lg">
          Discover exquisite luxury rooms designed for unparalleled comfort and
          elegance, promising a truly indulgent stay experience.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sixRooms.map((room) => (
          <FeaturedRoomCard key={sixRooms._id} room={room}></FeaturedRoomCard>
        ))}
      </div>
      <div className="flex justify-center my-4">
        {rooms.length > 6 ? (
          <div>
            <Link
              to="/allTouristSpot"
              className="bg-gradient-to-l from-[#3263FF] to-[#57b6ff] hover:bg-gradient-to-r px-8 py-3 rounded-xl font-bold text-white text-center"
            >
              See More
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default FeaturedRooms;
