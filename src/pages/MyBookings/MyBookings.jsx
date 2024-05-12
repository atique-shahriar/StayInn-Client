import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const MyBookings = () => {
  const allBookedRoom = useLoaderData();
  const {user} = useContext(AuthContext);
  const {email} = user;
  const bookings = allBookedRoom.filter((room) => room.mail == email);
  const [myBookings, setMyBookings] = useState(bookings);
  const [startDate, setStartDate] = useState(new Date());

  const handleUpdateDate = (e) => {
    e.preventDefault();

    const date = startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    console.log(date);
  };

  return (
    <div className="shadow-lg mb-1">
      <div className="w-10/12 lg:w-3/4 mx-auto min-h-[500px]">
        <div className="text-center space-y-4 flex flex-col items-center py-10 ">
          <h3 className="text-3xl font-bold text-[#3672B7]">My Booking List</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-[#bbe8f2] text-black">
                <th>Image</th>
                <th>Room Type</th>
                <th className="hidden md:block">Price</th>
                <th>Booked Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myBookings.map((myBooking) => (
                <tr key={myBooking._id}>
                  <td>
                    <img src={myBooking.image} alt="" className="w-36 h-28" />
                  </td>
                  <td>{myBooking.roomType}</td>
                  <td className="hidden md:block">$ {myBooking.price}</td>
                  <td>{myBooking.date}</td>
                  <td>
                    <FaEdit onClick={() => document.getElementById("my_modal_1").showModal()} className="text-xl text-[#F6BC1C] hover:text-[#009144] hover:text-2xl"></FaEdit>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box" method="dialog">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" defaultValue={myBooking.name} disabled placeholder="Enter your name" />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" defaultValue={myBooking.mail} disabled placeholder="Enter your email" />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Room Type</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="roomType" disabled defaultValue={myBooking.roomType} placeholder="Enter room type" />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" disabled defaultValue={myBooking.price} placeholder="Enter price" />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                          </div>
                          <div className="w-full flex justify-center">
                            <input className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Update" onClick={handleUpdateDate} />
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </td>
                  <td>
                    <MdDeleteForever className="text-xl text-[#F6BC1C] hover:text-[#EE3F36] hover:text-2xl"></MdDeleteForever>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
