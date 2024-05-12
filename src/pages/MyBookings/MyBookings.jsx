import axios from "axios";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import RatingModal from "./RatingModal";
import UpdateModal from "./UpdateModal";

const MyBookings = () => {
  const allBookedRoom = useLoaderData();
  const {user} = useContext(AuthContext);
  const {email} = user;
  const bookings = allBookedRoom.filter((room) => room.mail == email);
  const [myBookings, setMyBookings] = useState(bookings);

  const [updateBook, setUpdateBook] = useState();
  const [ratingBook, setRatingBook] = useState();

  const handleDelete = (id, roomId) => {
    Swal.fire({
      title: "Are you sure to delete this one?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/bookedRooms/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            console.log(roomId);
            axios
              .put(`http://localhost:5000/room/${roomId}`, {isAvailable: true})
              .then((res) => {
                console.log(res.data);
              });

            console.log("Deleted Successfully");
            Swal.fire({
              title: "Deleted!",
              text: "Your room has been deleted.",
              icon: "success",
            });
            const remainingBookedRooms = myBookings.filter(
              (myBooking) => myBooking._id != id
            );
            setMyBookings(remainingBookedRooms);
          }
        });
      }
    });
  };

  const handleUpdateDate = (bookInfo) => {
    setUpdateBook(bookInfo);
    document.getElementById("my_modal_1").showModal();
    document.getElementById("my_modal_1").closeModal();
  };

  const handleReview = (bookInfo) => {
    setRatingBook(bookInfo);
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div className="shadow-lg mb-1">
      {/* For updating date */}
      <dialog id="my_modal_1" className="modal">
        <UpdateModal updateBook={updateBook}></UpdateModal>
      </dialog>

      {/* For give ratings */}
      <dialog id="my_modal_2" className="modal">
        <RatingModal ratingBook={ratingBook}></RatingModal>
      </dialog>

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
                <th>Post Review</th>
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
                    <FaEdit
                      onClick={() => handleUpdateDate(myBooking)}
                      className="text-xl text-[#F6BC1C] hover:text-[#009144] hover:text-2xl"
                    ></FaEdit>
                  </td>
                  <td>
                    <MdDeleteForever
                      onClick={() =>
                        handleDelete(myBooking._id, myBooking.roomId)
                      }
                      className="text-xl text-[#F6BC1C] hover:text-[#EE3F36] hover:text-2xl"
                    ></MdDeleteForever>
                  </td>
                  <td>
                    <button
                      onClick={() => handleReview(myBooking)}
                      className="text-xl text-[#F6BC1C] hover:text-[#EE3F36] hover:text-2xl"
                    >
                      Review
                    </button>
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
