import axios from "axios";
import { toast } from "react-toastify";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const subName = e.target.name.value;
    const subEmail = e.target.email.value;
    const user = {subEmail, subName};

    if (subEmail == "" || !/\S+@\S+\.\S+/.test(subEmail)) {
      toast.error(`Provide valid email ${subEmail}`);
    } else {
      toast.success(`Thank you for subscribing with ${subEmail}`);
      axios(
        "https://b9a11-server-side-atique-shahriar.vercel.app/subscribers",
        user
      ).then((res) => console.log(res.data));
    }
  };

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto my-10 space-y-8">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-[#199DFF]">Our Newsletter</h3>
        <p className=" max-w-screen-lg">
          Stay Informed with Our Newsletter: Get the Latest Updates, Tips, and
          Trends Delivered Straight to Your Inbox!
        </p>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-4 md:gap-6 lg:gap-12 bg-gray-100 py-16 rounded-lg">
        <div>
          <img src="./newsletter.png" alt="" className="shadow-lg rounded-lg" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center md:text-justify">
            Welcome Offer
          </h3>
          <p className="mb-4 text-center md:text-justify">
            Sign up to get access and grab 15% off your first bookings.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block my-3 w-full md:w-4/5"
              placeholder="Write your name"
              name="name"
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "2px solid #ddd",
                borderRadius: "5px",
              }}
            />
            <input
              type="email"
              className="block w-full md:w-4/5"
              placeholder="Write your email address"
              name="email"
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "2px solid #ddd",
                borderRadius: "5px",
              }}
            />
            <input
              type="submit"
              value="Subscribe"
              className="w-full md:w-4/5 p-[6px] mt-3 border-2 rounded-lg text-lg font-medium text-[#199DFF] border-[#199DFF] hover:bg-[#199DFF] hover:text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
