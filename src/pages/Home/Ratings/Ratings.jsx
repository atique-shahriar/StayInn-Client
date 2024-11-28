import axios from "axios";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Ratings/RatingStyle.css";

const Ratings = () => {
  const [allRatings, setAllRatings] = useState([]);
  useEffect(() => {
    axios
      .get("https://stay-inn-server.vercel.app/ratingsAsc")
      .then((res) => {
        setAllRatings(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto my-10">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-[#199DFF]">Raving Reviews</h3>
        <p className=" max-w-screen-lg">
          Explore what our customers have to say about their experiences with
          our products and services. Read their reviews!
        </p>
      </div>
      <div>
        <Slide cascade damping={0.5} duration={2000}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {allRatings.map((rating) => (
              <SwiperSlide key={rating._id}>
                <div className="flex justify-center items-center gap-6 px-4 md:px-8  min-h-[200px]">
                  <div className="w-[100px]">
                    <img
                      src={rating.userPhoto}
                      alt=""
                      className=" rounded-[100%] border-white border-4"
                    />
                  </div>
                  <div className="text-left space-y-1 w-[300px]">
                    <h3 className="text-ll font-bold">{rating.name}</h3>
                    <p className="text-xs">{rating.dateTime}</p>
                    <p className="text-xs">{rating.roomType}</p>
                    <hr className=""></hr>
                    <p className="flex gap-2">
                      &ldquo;
                      {rating.comment}
                      &rdquo;
                    </p>
                    <p className="text-amber-400 flex justify-between items-center">
                      <div>
                        {rating.ratings == 1 ? (
                          <div className="flex gap-1">
                            <FaStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                          </div>
                        ) : rating.ratings == 2 ? (
                          <div className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                          </div>
                        ) : rating.ratings == 3 ? (
                          <div className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                            <FaRegStar />
                          </div>
                        ) : rating.ratings == 4 ? (
                          <div className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                          </div>
                        ) : rating.ratings == 5 ? (
                          <div className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        <button
                          className="tooltip  bg-[#199DFF] text-white hover:text-black  rounded-[100%] px-1 py-1"
                          data-tip="Click to see room details"
                        >
                          <Link to={`/roomdetails/${rating.roomId}`}>
                            <FaArrowRightLong />
                          </Link>
                        </button>
                      </div>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Slide>
      </div>
    </div>
  );
};

export default Ratings;
