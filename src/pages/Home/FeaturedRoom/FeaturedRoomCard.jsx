import { PropTypes } from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";

const FeaturedRoomCard = ({room}) => {
  const {_id, image, description, price_per_night, size} = room;
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
    <div className="p-4 border border-[#F6BC1C] rounded-lg">
      <div className=" rounded-xl flex justify-center relative">
        <img
          src={image}
          alt=""
          className="h-[250px] w-full shadow-md rounded-xl p-4  hover:border"
        />
        <span className="text-lg text-white px-4 rounded-s-md font-semibold absolute top-6 right-4">
          ${price_per_night}
          <span className="text-sm">/night</span>
        </span>
        <span className="text-sm text-white px-4 rounded-e-md absolute bottom-6 left-4 bg-[#199DFF] bg-opacity-60">
          ({size} room)
        </span>
      </div>
      <div>
        <p>{description}</p>
      </div>

      <div className="flex justify-center mt-4">
        <Link
          to={`/roomdetails/${_id}`}
          className="bg-gradient-to-br from-[#FF7B19] to-[#FFCE32] hover:bg-gradient-to-bl w-2/4 py-2 rounded-xl font-bold text-white text-center"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

FeaturedRoomCard.propTypes = {
  room: PropTypes.object,
};

export default FeaturedRoomCard;
