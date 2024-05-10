import { useRef } from "react";
import "swiper/css";

import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Style.css";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="w-11/12 md:w-4/5 mx-auto py-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <SwiperSlide>
          <img
            src="./1.jpg"
            className="w-full rounded-xl h-[400px] md:h-[500px] lg:h-[600px]"
          />
          <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-indigo-900 w-full absolute bg-opacity-40 rounded-xl"></div>

          <div className="absolute h-full flex flex-col justify-center items-center text-white space-y-3 lg:space-y-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl px-10">
              Redefining Hostel Experiences
            </h1>
            <p className="text-center md:text-lg px-10 md:px-20 lg:px-28">
              Experience hassle-free bookings and seamless management. Elevate
              guest satisfaction with our intuitive solutions.
            </p>
            <div className="flex gap-6">
              <button className="px-4 bg-[#ff3811] py-2 border-[#ff3811] border-2 font-medium rounded-lg       hover:border-white hover:bg-white hover:bg-opacity-10">
                Discover More
              </button>
              <button className="px-4 bg-white border-2 bg-opacity-10 hover:bg-[#ff3811] hover:border-[#ff3811] py-2 font-medium rounded-lg border-white">
                See Rooms
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./1.jpg"
            className="w-full rounded-xl h-[400px] md:h-[500px] lg:h-[600px]"
          />
          <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-indigo-900 w-full absolute bg-opacity-40 rounded-xl"></div>

          <div className="absolute h-full flex flex-col justify-center items-center text-white space-y-3 lg:space-y-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl px-10">
              Your Partner in Hostel Management
            </h1>
            <p className="text-center md:text-lg px-10 md:px-20 lg:px-28">
              Streamline your operations and enhance guest experiences
              effortlessly. From bookings to check-out, simplify every aspect
              with our innovative platform.
            </p>
            <div className="flex gap-6">
              <button className="px-4 bg-[#ff3811] py-2 border-[#ff3811] border-2 font-medium rounded-lg hover:border-white hover:bg-white hover:bg-opacity-10">
                Discover More
              </button>
              <button className="px-4 bg-white border-2 bg-opacity-10 hover:bg-[#ff3811] hover:border-[#ff3811] py-2 font-medium rounded-lg border-white">
                See Rooms
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./1.jpg"
            className="w-full rounded-xl h-[400px] md:h-[500px] lg:h-[600px]"
          />
          <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-indigo-900 w-full absolute bg-opacity-40 rounded-xl"></div>

          <div className="absolute h-full flex flex-col justify-center items-center text-white space-y-3 lg:space-y-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl px-10">
              Simplify Your Hostel Journey
            </h1>
            <p className="text-center md:text-lg px-10 md:px-20 lg:px-28">
              Effortlessly manage bookings, streamline operations, and elevate
              guest satisfaction. Our intuitive platform redefines hostel
              management for a seamless experience.
            </p>
            <div className="flex gap-6">
              <button className="px-4 bg-[#ff3811] py-2 border-[#ff3811] border-2 font-medium rounded-lg       hover:border-white hover:bg-white hover:bg-opacity-10">
                Discover More
              </button>
              <button className="px-4 bg-white border-2 bg-opacity-10 hover:bg-[#ff3811] hover:border-[#ff3811] py-2 font-medium rounded-lg border-white">
                See Rooms
              </button>
            </div>
          </div>
        </SwiperSlide>

        <div
          className="autoplay-progress text-transparent"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
