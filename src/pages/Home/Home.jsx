import Banner from "./Banner/Banner";
import FeaturedRooms from "./FeaturedRoom/FeaturedRooms";
import Map from "./Map/Map";
import Newsletter from "./Newsletter/Newsletter";
import Ratings from "./Ratings/Ratings";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <FeaturedRooms></FeaturedRooms>
        <Ratings></Ratings>
        <Newsletter></Newsletter>
        <Map></Map>
      </div>
    </div>
  );
};

export default Home;
