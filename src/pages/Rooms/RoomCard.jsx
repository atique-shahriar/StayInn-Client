import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
  const {_id, image, price_per_night} = room;
  return (
    <div className="p-4 border border-[#F6BC1C] rounded-lg">
      <Link to={`/roomdetails/${_id}`}>
        <div
          className=" rounded-xl flex justify-center relative tooltip"
          data-tip="Click for details"
        >
          <img
            src={image}
            alt=""
            className="h-[250px] w-full shadow-md rounded-lg  hover:border"
          />
          <span className="text-base text-white px-4  font-semibold absolute bottom-6 left-1 bg-blue-400 bg-opacity-30">
            ${price_per_night}
            <span className="text-sm">/night</span>
          </span>
        </div>
      </Link>
    </div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object,
};
export default RoomCard;
