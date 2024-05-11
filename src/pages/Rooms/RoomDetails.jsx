import { Link, useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const roomInfo = useLoaderData();
  const {image, description, price_per_night, size} = roomInfo;

  return (
    <div>
      <div
        className="hero h-48"
        style={{
          backgroundImage: "url(https://i.ibb.co/F07vcy1/room-Details.jpg)",
        }}
      >
        <div className="hero-overlay bg-slate-900 bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Room Details</h1>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-4/5 mx-auto mt-12 flex items-center ">
        <div>
          <img
            src={image}
            alt=""
            className="w-3/4 flex items-center justify-center"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-3xl">{size} Room</h3>
          <p className="font-bold text-base text-[#FF7B19]">
            Price: ${price_per_night}/night
          </p>
          <p className="font-bold text-base text-[#FF7B19]">Review: </p>
          <p className="pb-6">{description}</p>
          <Link
            to="/"
            className="bg-gradient-to-br from-[#FF7B19] to-[#FFCE32] hover:bg-gradient-to-bl py-2 px-6 font-bold text-white text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
