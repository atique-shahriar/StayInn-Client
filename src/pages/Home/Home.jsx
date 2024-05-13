import Banner from "./Banner/Banner";
import FeaturedRooms from "./FeaturedRoom/FeaturedRooms";
import Map from "./Map/Map";
import Ratings from "./Ratings/Ratings";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <FeaturedRooms></FeaturedRooms>
        <Ratings></Ratings>
        <Map></Map>
      </div>
    </div>
  );
};

export default Home;
