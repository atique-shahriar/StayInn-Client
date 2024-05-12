import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const RoomDetails = () => {
  const roomInfo = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const [booked, setBooked] = useState();
  const {_id, image, description, price_per_night, size, availability} = roomInfo;
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooked = () => {
    toast.error("Room is already booked. Sorry!");
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    const roomId = _id;
    const name = e.target.name.value;
    const mail = e.target.email.value;
    const roomType = e.target.roomType.value;
    const price = parseInt(e.target.price.value);
    const date = startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const bookedInfo = {roomId, image, name, mail, roomType, price, date};
    setBooked(bookedInfo);
  };

  const handleBookNow = () => {
    if (!user) {
      navigate("/login");
    }
    document.getElementById("my_modal_1").showModal();
  };

  const handleBookedRoom = () => {
    axios.post("http://localhost:5000/bookedRooms", booked).then((res) => {
      console.log(res.data);
      toast.success("Booked the room");
      axios.put(`http://localhost:5000/room/${_id}`, {isAvailable: false}).then((res) => {
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
      <div className="w-11/12 md:w-4/5 mx-auto mt-12 flex items-center ">
        <div>
          <img src={image} alt="" className="w-3/4 flex items-center justify-center" />
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-3xl">{size} Room</h3>
          <p className="font-bold text-base text-[#FF7B19]">Price: ${price_per_night}/night</p>
          <p className="font-bold text-base text-[#FF7B19]">Review: </p>
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
    </div>
  );
};

export default RoomDetails;
