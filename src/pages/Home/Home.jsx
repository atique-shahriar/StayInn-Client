import Banner from "./Banner/Banner";
import FeaturedRooms from "./FeaturedRoom/FeaturedRooms";
import Map from "./Map/Map";
import Newsletter from "./Newsletter/Newsletter";
import PopUp from "./PopUp/PopUp";
import Ratings from "./Ratings/Ratings";

const Home = () => {
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("my_modal_3").showModal();
    }, 2000);
  });

  return (
    <div>
      <div>
        <Banner></Banner>
        <dialog id="my_modal_3" className="modal">
          <PopUp></PopUp>
        </dialog>
        <FeaturedRooms></FeaturedRooms>
        <Ratings></Ratings>
        <Newsletter></Newsletter>
        <Map></Map>
      </div>
    </div>
  );
};

export default Home;
