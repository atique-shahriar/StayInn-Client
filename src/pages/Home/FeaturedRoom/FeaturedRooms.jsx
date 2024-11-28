import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import FeaturedRoomCard from "./FeaturedRoomCard";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("https://stay-inn-server.vercel.app/rooms")
      .then((res) => {
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
    <div className="w-11/12 lg:w-4/5 mx-auto my-10 space-y-8">
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
          <FeaturedRoomCard key={room._id} room={room}></FeaturedRoomCard>
        ))}
      </div>
      <div className="flex justify-center my-4">
        {rooms.length > 6 ? (
          <div>
            <Link
              to="/rooms"
              className="font-medium hover:font-bold text-[#FF3811]  text-center"
            >
              <div className="flex items-center relative mr-4">
                <span className="border-2 border-[#FF3811] px-6 rounded-2xl py-1">
                  Explore More
                </span>
                <span>
                  <IoIosArrowDropright className="text-4xl bg-[#FF3811] rounded-[100%] text-white absolute top-0 left-[132px]"></IoIosArrowDropright>
                </span>
              </div>
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
