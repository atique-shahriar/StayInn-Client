import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/roomsAvailable/${"all"}`).then((res) => {
      setRooms(res.data);
      console.log(res.data);
    });
  }, []);

  const handlePriceFilter = (e) => {
    const selected = e.target.value;
    console.log(selected);
    if (selected) {
      axios
        .get(`http://localhost:5000/roomsAvailable/${selected}`)
        .then((res) => {
          setRooms(res.data);
          console.log(res.data);
        });
    }
  };

  return (
    <div className="w-11/12 md:w-4/5 mx-auto py-4">
      <div className="text-center space-y-4 flex flex-col items-center mb-6">
        <h3 className="text-3xl font-bold  text-[#3672B7]">
          Explore our available accommodations.
        </h3>
        <p className=" max-w-screen-md">
          Browse through our selection of available rooms, each offering unique
          amenities and comfort for your stay.
        </p>
      </div>
      <div className="flex justify-center md:justify-end py-2">
        <select
          className="select w-full max-w-44 border select-bordered "
          onChange={handlePriceFilter}
          defaultValue={"default"}
        >
          <option disabled value="default">
            Sorted By?
          </option>
          <option value="0-25">Price: $0 - $25</option>
          <option value="26-50">Price: $26 - $50</option>
          <option value="51-75">Price: $51 - $75</option>
          <option value="76-100">Price: $76 - $100</option>
          <option value="101">Price: &gt;$100</option>
        </select>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
      <div className="flex justify-center pb-16">
        <Link
          to="/"
          className="bg-gradient-to-l from-[#3263FF] to-[#57b6ff] hover:bg-gradient-to-r px-8 py-3 rounded-xl font-bold text-white text-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Rooms;
