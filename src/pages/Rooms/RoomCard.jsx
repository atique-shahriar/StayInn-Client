import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
  const {_id, image, price_per_night, availability} = room;
  const [roomInfo, setRoomInfo] = useState();

  useState(() => {
    axios.get(`http://localhost:5000/room/${_id}`).then((res) => {
      setRoomInfo(res.data);
    });
  }, []);

  return (
    <div className="p-4 border border-[#F6BC1C] rounded-lg">
      <Link to={`/roomdetails/${_id}`}>
        <div className=" rounded-xl flex relative tooltip" data-tip="Click for details">
          <img src={image} alt="" className="h-[250px] w-full shadow-md rounded-lg " />
          <span className="text-base text-white px-6 rounded-ss-lg font-semibold absolute bg-gray-900 bg-opacity-60">
            ${price_per_night}
            <span className="text-sm">/night</span>
          </span>
        </div>
        <div className="flex gap-4 justify-center mt-2">
          <p className=" bg-gray-200 w-fit px-4 rounded-md text-sm text-[#FF7B19]">Reviewed by {roomInfo?.reviews?.length > 0 ? roomInfo?.reviews?.length : "0"}</p>
          <p className=" bg-gray-200 w-fit px-4 rounded-md text-sm text-[#FF7B19]">{availability ? "Available" : "Not Available"}</p>
        </div>
      </Link>
    </div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
};
export default RoomCard;
