import axios from "axios";
import { PropTypes } from "prop-types";
import { toast } from "react-toastify";

const RatingModal = ({ratingBook}) => {
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const roomId = ratingBook.roomId;
    const name = ratingBook.name;
    const roomType = ratingBook.roomType;
    const price = ratingBook.price;
    const comment = e.target.comment.value;
    const ratings = parseInt(e.target.ratings.value);
    const currTime = new Date();
    const bookedInfo = {
      roomId,
      name,
      roomType,
      price,
      comment,
      ratings,
      currTime,
    };
    console.log(bookedInfo);
    axios.post("http://localhost:5000/ratings", bookedInfo).then((res) => {
      console.log(res.data);
      axios.put(`http://localhost:5000/rooms/${roomId}`, {bookedInfo}).then((res) => console.log(res.data));
    });
    toast.success("Review added successfully");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="modal-box">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleReviewSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" defaultValue={ratingBook?.name} disabled />
        </div>

        <div className="mb-4 flex gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Room Type</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="roomType" disabled defaultValue={ratingBook?.roomType} />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" disabled defaultValue={ratingBook?.price} />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Comment</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="comment" required placeholder="Share your experince" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ratings</label>
          <select name="ratings" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="" disabled name="ratings">
              Give your ratings
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="w-full flex justify-center">
          <input className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Click" />
        </div>
      </form>
    </div>
  );
};
RatingModal.propTypes = {
  ratingBook: PropTypes.object,
};

export default RatingModal;
