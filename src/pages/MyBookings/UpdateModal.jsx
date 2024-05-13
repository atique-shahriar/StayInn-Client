import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";

const UpdateModal = ({updateBook}) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleUpdateDate = (e) => {
    e.preventDefault();
    const id = updateBook._id;
    const date = startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    axios.put(`http://localhost:5000/bookedRooms/${id}`, {date}).then((res) => {
      console.log(res.data);
      toast.success("Date Updated successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  return (
    <div className="modal-box">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleUpdateDate}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            defaultValue={updateBook?.name}
            disabled
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
            defaultValue={updateBook?.mail}
            disabled
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Room Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="roomType"
            disabled
            defaultValue={updateBook?.roomType}
            placeholder="Enter room type"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="price"
            disabled
            defaultValue={updateBook?.price}
            placeholder="Enter price"
          />
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
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

UpdateModal.propTypes = {
  updateBook: PropTypes.object,
};

export default UpdateModal;
