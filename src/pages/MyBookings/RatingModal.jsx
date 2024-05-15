import axios from "axios";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const RatingModal = ({ratingBook}) => {
  const {user} = useContext(AuthContext);
  console.log(ratingBook);
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const roomId = ratingBook.roomId;
    const name = ratingBook.name;
    const userPhoto = user?.photoURL;
    const roomType = ratingBook.roomType;
    const price = ratingBook.price;
    const comment = e.target.comment.value;
    const ratings = parseInt(e.target.ratings.value);
    const currTime = new Date();
    const timestamp = currTime.getTime();
    const dateString = currTime.toDateString();
    const timeString = currTime.toLocaleTimeString();
    const dateTime = dateString + ", " + timeString;
    const bookedInfo = {
      roomId,
      name,
      userPhoto,
      roomType,
      price,
      comment,
      ratings,
      currTime,
      timestamp,
      dateTime,
    };
    console.log(bookedInfo);
    axios
      .post(
        "https://b9a11-server-side-atique-shahriar.vercel.app/ratings",
        bookedInfo
      )
      .then((res) => {
        console.log(res.data);
        axios
          .put(
            `https://b9a11-server-side-atique-shahriar.vercel.app/rooms/${roomId}`,
            {bookedInfo}
          )
          .then((res) => console.log(res.data));
      });
    toast.success("Review added successfully");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="modal-box">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleReviewSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            defaultValue={ratingBook?.name}
            disabled
          />
        </div>

        <div className="mb-4 flex gap-4">
          <div className="w-3/4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Room Type
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="roomType"
              disabled
              defaultValue={ratingBook?.roomType}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="price"
              disabled
              defaultValue={ratingBook?.price}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Comment
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="comment"
            required
            placeholder="Share your experince"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ratings
          </label>
          <select
            name="ratings"
            id=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled name="ratings">
              Give your ratings (1-5)
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="w-full flex justify-center">
          <input
            className="px-6 text-white hover:text-[#199DFF] bg-[#199DFF] py-2 border-[#199DFF] border-2 font-medium rounded-lg     hover:border-[#199DFF] hover:bg-white hover:bg-opacity-10"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm bg-[#FF3811] text-white hover:text-black btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
    </div>
  );
};
RatingModal.propTypes = {
  ratingBook: PropTypes.object,
};

export default RatingModal;
