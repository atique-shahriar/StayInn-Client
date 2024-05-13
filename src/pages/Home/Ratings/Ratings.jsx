import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Ratings/style.css";

const Ratings = () => {
  const [allRatings, setAllRatings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/ratingsAsc").then((res) => {
      setAllRatings(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <div>
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
              <div className="flex justify-center items-center gap-6 px-4 md:px-8">
                <div>
                  <img src={rating.userPhoto} alt="" className="w-24 h-24 rounded-[100%]" />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="text-ll font-bold">{rating.name}</h3>
                  <p className="text-xs">{rating.dateTime}</p>
                  <hr className=""></hr>
                  <p className="flex gap-2">
                    <RiDoubleQuotesL />
                    {rating.comment}
                    <RiDoubleQuotesR />
                  </p>
                  <p className="text-amber-400 flex justify-between">
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
                      <button>
                        <FaArrowRightLong />
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Ratings;
