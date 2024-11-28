import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const RoomDetails = () => {
  const roomInfo = useLoaderData();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [booked, setBooked] = useState();
  const {
    _id,
    image,
    name,
    description,
    price_per_night,
    availability,
    reviews,
    special_offers,
  } = roomInfo;
  const {user} = useContext(AuthContext);

  const handleBooked = () => {
    toast.error("This room is already booked. Sorry!");
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    const roomId = _id;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const roomType = e.target.roomType.value;
    const price = parseInt(e.target.price.value);
    console.log(startDate);
    const date = startDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const dateArray = date.split("/");
    console.log(dateArray);
    const year = dateArray[2].padStart(4, "0");
    const month = (parseInt(dateArray[0], 10) + 1).toString().padStart(2, "0");
    const day = dateArray[1].padStart(2, "0");
    const dateFormat = year + month + day;
    console.log(dateFormat);

    const bookedInfo = {
      roomId,
      image,
      name,
      email,
      roomType,
      price,
      date,
      dateFormat,
    };
    setBooked(bookedInfo);
  };

  const location = useLocation();
  console.log(location);

  const handleBookNow = () => {
    if (!user) {
      navigate("/login");
    } else {
      document.getElementById("my_modal_1").showModal();
    }
  };

  const handleBookedRoom = () => {
    axios
      .post(
        "https://stay-inn-server.vercel.app/bookedRooms",
        booked
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Booked the room");
        setTimeout(() => {
          navigate("/mybookings");
        }, 1000);
        axios
          .put(
            `https://stay-inn-server.vercel.app/room/${_id}`,
            {isAvailable: false}
          )
          .then((res) => {
            console.log(res.data);
          });
      });
  };

  const handleDeleteBooked = () => {
    setBooked(null);
  };

  return (
    <div>
      <Helmet>
        <title>Stay Inn | Room</title>
      </Helmet>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box" method="dialog">
          {booked ? (
            <>
              <div className="flex items-center justify-center">
                <img src={image} alt="" className=" rounded-lg w-3/4" />
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xl mt-2 font-medium">{name}</div>
                <div className="text-base font-medium">
                  Price:{" "}
                  <span className="text-[#FF3811]">${price_per_night}</span>
                </div>
                <div className="text-sm">MM/DD/YYYY: {booked.date}</div>
                <div className="text-center mt-2">
                  If you want to book click on{" "}
                  <span className="text-[#199DFF] font-bold">Confirm</span>{" "}
                  Button. Otherwise{" "}
                  <span className="text-[#FF3811] font-bold">Cancel.</span>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      className="px-6 text-white bg-[#ff3811] py-2 border-[#ff3811] border-2 font-medium rounded-lg       hover:border-[#ff3811] mr-4 hover:text-[#ff3811] hover:bg-white hover:bg-opacity-10"
                      onClick={handleDeleteBooked}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-6 text-white hover:text-[#199DFF] bg-[#199DFF] py-2 border-[#199DFF] border-2 font-medium rounded-lg     hover:border-[#199DFF] hover:bg-white hover:bg-opacity-10 ml-4"
                      onClick={handleBookedRoom}
                    >
                      Confirm
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <>
              <form
                onSubmit={handleSubmitData}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4 flex gap-4">
                  <div className="w-3/4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Room
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="roomType"
                      disabled
                      defaultValue={name}
                      placeholder="Enter room type"
                    />
                  </div>

                  <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Price
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="price"
                      disabled
                      defaultValue={price_per_night}
                      placeholder="Enter price"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Date
                  </label>
                  <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <input
                    className="px-6 text-white hover:text-[#199DFF] bg-[#199DFF] py-2 border-[#199DFF] border-2 font-medium rounded-lg     hover:border-[#199DFF] hover:bg-white hover:bg-opacity-10"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    className="btn btn-sm btn-circle bg-[#FF3811] text-white hover:text-black btn-ghost absolute right-2 top-2"
                    onClick={handleDeleteBooked}
                  >
                    ✕
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </dialog>
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
      <div className="w-11/12 md:w-4/5 mx-auto my-12 ">
        <h3 className="font-bold text-3xl text-center text-[#199DFF] mb-8">
          {name}
        </h3>
        <div className="flex items-center gap-4 md:gap-20 flex-col md:flex-row">
          <div className="flex flex-1  justify-end">
            <img
              src={image}
              alt=""
              className=" lg:max-w-[450px] flex items-center justify-center shadow-lg rounded-lg"
            />
          </div>
          <div className="space-y-2 flex flex-col flex-1 justify-center ">
            <h3 className="font-bold text-3xl"></h3>
            <p className="font-medium text-xl ">
              Price: ${price_per_night}
              <span className="text-sm">/night.</span>
            </p>
            <p className="font-medium text-base">
              Review:{" "}
              {reviews.length > 0 ? (
                reviews.length
              ) : (
                <span className="text-[#FF3811]">
                  No review available right now.
                </span>
              )}
            </p>
            <p className="pb-6 text-justify">
              <span className="font-medium">Details: </span>
              {description}
            </p>

            {availability ? (
              <div>
                <span className="text-[#199DFF] font-bold text-base mr-4">
                  AVAILABLE
                </span>

                <Link
                  onClick={() => handleBookNow()}
                  className="px-6 text-white hover:text-[#199DFF] bg-[#199DFF] py-2 border-[#199DFF] border-2 font-medium rounded-lg     hover:border-[#199DFF] hover:bg-white hover:bg-opacity-10"
                >
                  Book Now
                </Link>
              </div>
            ) : (
              <div>
                <span className="text-[#FF3811] font-bold text-base mr-4">
                  UNAVAILABLE
                </span>
                <Link
                  onClick={handleBooked}
                  className="px-6 text-white bg-gray-800 py-2 border-gray-800 border-2 font-medium rounded-lg disabled"
                >
                  Booked
                </Link>
              </div>
            )}
            <div className="pt-4">
              <h4 className="font-medium text-lg">
                {special_offers[0]} | {special_offers[1]}
              </h4>
            </div>
          </div>
        </div>

        <div>
          {reviews.length > 0 ? (
            <div>
              <div className="text-center space-y-4 flex flex-col items-center py-4 mt-16">
                <h3 className="text-xl font-bold text-[#FF3811]">
                  Review for {name}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className="bg-[#c5e6ff] text-sm text-black">
                      <th>Name</th>
                      <th>Review</th>
                      <th>Review Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((review) => (
                      <tr key={review._id} className="text-base">
                        <td className="font-medium">{review.name}</td>
                        <td>
                          <span className="font-medium">Comment:</span>{" "}
                          {review.comment} <br />{" "}
                          <div className="text-amber-400 text-base mt-1 flex items-center gap-2">
                            <span className="font-medium text-black">
                              Ratings:
                            </span>{" "}
                            {review.ratings == 1 ? (
                              <div className="flex gap-1">
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                              </div>
                            ) : review.ratings == 2 ? (
                              <div className="flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                              </div>
                            ) : review.ratings == 3 ? (
                              <div className="flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                              </div>
                            ) : review.ratings == 4 ? (
                              <div className="flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                              </div>
                            ) : review.ratings == 5 ? (
                              <div className="flex gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </td>
                        <td>{review.dateTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
