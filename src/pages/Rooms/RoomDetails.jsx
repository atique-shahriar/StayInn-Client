import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const RoomDetails = () => {
  const roomInfo = useLoaderData();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [booked, setBooked] = useState();
  const {_id, image, description, price_per_night, size, availability, reviews} = roomInfo;
  const {user} = useContext(AuthContext);

  const handleBooked = () => {
    toast.error("Room is already booked. Sorry!");
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
    axios.post("https://b9a11-server-side-atique-shahriar.vercel.app/bookedRooms", booked).then((res) => {
      console.log(res.data);
      toast.success("Booked the room");
      axios.put(`https://b9a11-server-side-atique-shahriar.vercel.app/room/${_id}`, {isAvailable: false}).then((res) => {
        console.log(res.data);
      });
    });
  };

  const handleDeleteBooked = () => {
    setBooked(null);
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box" method="dialog">
          {booked ? (
            <>
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                {price_per_night} {size}
              </div>
              <div>{description}</div>
              <div>{booked.date}</div>
              <div className="w-full flex justify-center">
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn" onClick={handleDeleteBooked}>
                      Cancel
                    </button>
                    <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleBookedRoom}>
                      Confirm
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmitData} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" defaultValue={user?.displayName} placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" defaultValue={user?.email} placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Room Type</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="roomType" disabled defaultValue={size} placeholder="Enter room type" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" disabled defaultValue={price_per_night} placeholder="Enter price" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                  <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <input className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit" />
                </div>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn" onClick={handleDeleteBooked}>
                    Cancel
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
        <div className="flex items-center ">
          <div>
            <img src={image} alt="" className="w-3/4 flex items-center justify-center" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-3xl">{size} Room</h3>
            <p className="font-bold text-base text-[#FF7B19]">Price: ${price_per_night}/night</p>
            <p className="font-bold text-base text-[#FF7B19]">Review: {reviews.length > 0 ? reviews.length : "Currently no review availabe"}</p>
            <p className="pb-6">{description}</p>

            {availability ? (
              <div>
                <span className="text-[#199DFF] font-bold text-base mr-4">AVAILABLE</span>

                <Link onClick={() => handleBookNow()} className="bg-gradient-to-br from-[#FF7B19] to-[#FFCE32] hover:bg-gradient-to-bl py-2 px-6 font-bold text-white text-center">
                  Book Now
                </Link>
              </div>
            ) : (
              <div>
                <span className="text-[#FF7B19] font-bold text-base mr-4">UNAVAILABLE</span>
                <Link onClick={handleBooked} className="bg-gray-600  py-2 px-6 font-bold text-white text-center disabled">
                  Booked
                </Link>
              </div>
            )}
          </div>
        </div>

        <div>
          {reviews.length > 0 ? (
            <div>
              <div className="text-center space-y-4 flex flex-col items-center py-10 ">
                <h3 className="text-3xl font-bold text-[#3672B7]">All reviews for this room</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className="bg-[#bbe8f2] text-black">
                      <th>Name</th>
                      <th>Review</th>
                      <th>Review Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((review) => (
                      <tr key={review._id}>
                        <td>{review.name}</td>
                        <td>
                          {review.comment} <br />{" "}
                          <div className="text-amber-400 text-base">
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
