import { PropTypes } from "prop-types";
import { useContext } from "react";
import { Zoom } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";

const FeaturedRoomCard = ({room}) => {
  const {_id, name, image, price_per_night, size, availability} = room;
  const {loading} = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <Zoom>
      <div className="p-4 border border-[#e8f5ff] rounded-lg shadow-md shadow-orange-100">
        <div className=" rounded-md flex justify-center relative">
          <img
            src={image}
            alt=""
            className="h-[250px] w-full shadow-md rounded-md p-3  hover:border"
          />
          <span className="text-sm text-white px-3 rounded-e-md absolute bottom-6 left-3 bg-[#199DFF] bg-opacity-60">
            ({size} room)
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-center">{name}</h3>
        </div>
        <div className="flex justify-center gap-4 my-2">
          <span className="px-2 font-medium bg-[#ceeaff] rounded-lg text-sm text-gray-600">
            ${price_per_night}/night
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

        <div className="flex justify-center mt-2">
          <Link
            to={`/roomdetails/${_id}`}
            className=" font-medium text-[#199DFF] border hover:border-2 border-[#199DFF] rounded-lg px-4 hover:font-bold flex items-center gap-2"
          >
            <span>More</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </Zoom>
  );
};

FeaturedRoomCard.propTypes = {
  room: PropTypes.object,
};

export default FeaturedRoomCard;
