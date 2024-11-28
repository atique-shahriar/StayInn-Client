import axios from "axios";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
  const {_id} = room;
  const [roomInfo, setRoomInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stay-inn-server.vercel.app/room/${_id}`)
      .then((res) => {
        setRoomInfo(res.data);
      });
  }, []);

  const {name, image, price_per_night, availability} = roomInfo;
  return (
    <Zoom delay={1000} triggerOnce>
      <div className="p-4 border border-[#e8f5ff] rounded-lg shadow-md shadow-orange-100">
        <Link to={`/roomdetails/${_id}`}>
          <div
            className=" rounded-xl flex relative tooltip"
            data-tip="Click for details"
          >
            <img
              src={image}
              alt=""
              className="h-[250px] w-full shadow-md rounded-lg "
            />
            <span className="text-base text-white px-8 rounded-ss-lg font-semibold absolute bg-gray-900 bg-opacity-60">
              ${price_per_night}
              <span className="text-sm">/night</span>
            </span>
            <span className=" text-white w-full top-1/2 py-4 -translate-y-1/2 text-lg font-semibold absolute  bg-[#199DFF] bg-opacity-60">
              {name}
            </span>
          </div>
          <div className="flex justify-center gap-4 my-2">
            <span
              className="px-2 font-medium bg-[#ceeaff] rounded-lg text-sm
              text-gray-600"
            >
              Reviewed by{" "}
              {roomInfo?.reviews?.length > 0 ? roomInfo?.reviews?.length : "0"}
            </span>
            <span className=" font-medium text-sm text-gray-600">
              {availability ? (
                <span className="bg-[#ceeaff] rounded-lg px-2">Available</span>
              ) : (
                <span className="bg-[#ffc2b5] rounded-lg px-2">
                  Not Available
                </span>
              )}
            </span>
          </div>
        </Link>
      </div>
    </Zoom>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
};
export default RoomCard;
