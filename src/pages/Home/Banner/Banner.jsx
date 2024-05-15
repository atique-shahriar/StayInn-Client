import "animate.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto py-4 animate__animated animate__fadeIn">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="./1.jpg"
            className="w-full rounded-xl h-[400px] md:h-[500px] lg:h-[600px]"
          />
          <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-indigo-900 w-full absolute bg-opacity-60 rounded-xl"></div>
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-white space-y-3 lg:space-y-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl px-10 text-center">
              Redefining Hostel Experiences
            </h1>
            <p className="text-center md:text-lg px-10 md:px-20 lg:px-28">
              Experience hassle-free bookings and seamless management. Elevate
              guest satisfaction with our intuitive solutions.
            </p>
            <div className="flex gap-6">
              <button className="px-4 bg-[#ff3811] py-2 border-[#ff3811] border-2 font-medium rounded-lg       hover:border-white hover:bg-white hover:bg-opacity-10">
                <Link to="/rooms">See Rooms</Link>
              </button>
              <button className="px-4 bg-white border-2 bg-opacity-10 hover:bg-[#ff3811] hover:border-[#ff3811] py-2 font-medium rounded-lg border-white">
                <Link to="/contactus">Contact Us</Link>
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-x-1/2 bottom-3 left-1/2 gap-4">
            {/* absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 */}
            <a
              href="#slide3"
              className="btn btn-circle border-none text-white bg-slate-800 bg-opacity-60 hover:text-black"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle border-none text-white bg-slate-800 bg-opacity-60 hover:text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="./2.jpg"
            className="w-full rounded-xl h-[400px] md:h-[500px] lg:h-[600px]"
          />
          <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-indigo-900 w-full absolute bg-opacity-60 rounded-xl"></div>

          <div className="absolute h-full flex flex-col justify-center items-center text-white space-y-3 lg:space-y-8">
            <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-6xl px-10">
              Your Partner in Hostel Management
            </h1>
            <p className="text-center md:text-lg px-10 md:px-20 lg:px-28">
              Streamline your operations and enhance guest experiences
              effortlessly. From bookings to check-out, simplify every aspect
              with our innovative platform.
            </p>
            <div className="flex gap-6">
              <button className="px-4 bg-[#ff3811] py-2 border-[#ff3811] border-2 font-medium rounded-lg hover:border-white hover:bg-white hover:bg-opacity-10">
                <Link to="/rooms">See Rooms</Link>
              </button>
              <button className="px-4 bg-white border-2 bg-opacity-10 hover:bg-[#ff3811] hover:border-[#ff3811] py-2 font-medium rounded-lg border-white">
                <Link to="/contactus">Contact Us</Link>
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-x-1/2 bottom-3 left-1/2 gap-4">
            <a
              href="#slide1"
              className="btn btn-circle border-none text-white bg-slate-800 bg-opacity-60 hover:text-black"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle border-none text-white bg-slate-800 bg-opacity-60 hover:text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="./3.jpg"
            className="w-full rounded-xl h-[400px] md:h-[500px] lg:h-[600px]"
          />
          <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-indigo-900 w-full absolute bg-opacity-60 rounded-xl"></div>

          <div className="absolute h-full flex flex-col justify-center items-center text-white space-y-3 lg:space-y-8">
            <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-6xl px-10">
              Simplify Your Hostel Journey
            </h1>
            <p className="text-center md:text-lg px-10 md:px-20 lg:px-28">
              Effortlessly manage bookings, streamline operations, and elevate
              guest satisfaction. Our intuitive platform redefines hostel
              management for a seamless experience.
            </p>
            <div className="flex gap-6">
              <button className="px-4 bg-[#ff3811] py-2 border-[#ff3811] border-2 font-medium rounded-lg       hover:border-white hover:bg-white hover:bg-opacity-10">
                <Link to="/rooms">See Rooms</Link>
              </button>
              <button className="px-4 bg-white border-2 bg-opacity-10 hover:bg-[#ff3811] hover:border-[#ff3811] py-2 font-medium rounded-lg border-white">
                <Link to="/contactus">Contact Us</Link>
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-x-1/2 bottom-3 left-1/2 gap-4">
            <a
              href="#slide2"
              className="btn btn-circle border-none text-white bg-slate-800 bg-opacity-60 hover:text-black"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle border-none text-white bg-slate-800 bg-opacity-60 hover:text-black"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
