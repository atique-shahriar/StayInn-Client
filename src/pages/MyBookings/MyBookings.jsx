import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaEdit, FaRegStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import RatingModal from "./RatingModal";
import UpdateModal from "./UpdateModal";

const MyBookings = () => {
  // const allBookedRoom = useLoaderData();
  const {user} = useContext(AuthContext);
  // const {email} = user;
  const [myBookings, setMyBookings] = useState([]);
  // const bookings = allBookedRoom.filter((room) => room.mail == email);
  console.log(user.email);

  const url = `https://stay-inn-server.vercel.app/book/${user.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials: true}).then((res) => setMyBookings(res.data));
  }, [url]);

  console.log(myBookings);

  const [updateBook, setUpdateBook] = useState();
  const [ratingBook, setRatingBook] = useState();

  const handleDelete = (id, roomId, bookDate) => {
    console.log(bookDate);

    const bookedDate = new Date(bookDate).getTime();
    const deleteBy = bookedDate - 8600000;
    const currDate = new Date().getTime();
    // console.log(
    //   bookedDate / 86400000,
    //   deleteBy / 86400000,
    //   currDate / 86400000
    // );

    if (currDate < deleteBy) {
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
          axios.delete(`https://stay-inn-server.vercel.app/bookedRooms/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              console.log(roomId);
              axios
                .put(`https://stay-inn-server.vercel.app/room/${roomId}`, {
                  isAvailable: true,
                })
                .then((res) => {
                  console.log(res.data);
                });

              console.log("Deleted Successfully");
              Swal.fire({
                title: "Deleted!",
                text: "Your room has been deleted.",
                icon: "success",
              });
              const remainingBookedRooms = myBookings.filter((myBooking) => myBooking._id != id);
              setMyBookings(remainingBookedRooms);
            }
          });
        }
      });
    } else {
      toast.warn("You have to delete your booking minimum one day before booked date.");
    }
  };

  const handleUpdateDate = (bookInfo) => {
    setUpdateBook(bookInfo);
    document.getElementById("updateDateModal").showModal();
  };

  const handleReview = (bookInfo) => {
    setRatingBook(bookInfo);
    document.getElementById("ratingModal").showModal();
  };

  return (
    <div className="shadow-lg mb-1">
      <Helmet>
        <title>Stay Inn | Booking</title>
      </Helmet>
      {/* For updating date */}
      <dialog
        id="updateDateModal"
        className="modal">
        <UpdateModal updateBook={updateBook}></UpdateModal>
      </dialog>

      {/* For give ratings */}
      <dialog
        id="ratingModal"
        className="modal">
        <RatingModal ratingBook={ratingBook}></RatingModal>
      </dialog>

      <div className="w-10/12 lg:w-3/4 mx-auto min-h-[600px]">
        <div className="text-center space-y-4 flex flex-col items-center py-10 ">
          <h3 className="text-3xl font-bold text-[#199DFF]">My Booking List</h3>
        </div>
        <Zoom>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="bg-[#c6e6ff] text-black text-sm">
                  <th>Image</th>
                  <th>Room</th>
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
                      <img
                        src={myBooking.image}
                        alt=""
                        className="w-24 h-18 rounded-lg shadow-lg"
                      />
                    </td>
                    <td>{myBooking.roomType}</td>
                    <td>${myBooking.price}</td>
                    <td>{myBooking.date}</td>
                    <td>
                      <FaEdit
                        onClick={() => handleUpdateDate(myBooking)}
                        className="text-xl text-[#199DFF] hover:text-[#1079c9] hover:text-2xl"></FaEdit>
                    </td>
                    <td>
                      <MdDeleteForever
                        onClick={() => handleDelete(myBooking._id, myBooking.roomId, myBooking.date)}
                        className="text-xl text-[#FF3811] hover:text-[#bd2f12] hover:text-2xl"></MdDeleteForever>
                    </td>
                    <td>
                      <FaRegStar
                        onClick={() => handleReview(myBooking)}
                        className="text-xl text-[#F6BC1C] hover:text-[#e4af1d] hover:text-2xl"></FaRegStar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default MyBookings;
