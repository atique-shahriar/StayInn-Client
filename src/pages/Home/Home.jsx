import Banner from "./Banner/Banner";
import FeaturedRooms from "./FeaturedRoom/FeaturedRooms";
import Map from "./Map/Map";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <FeaturedRooms></FeaturedRooms>
        <Map></Map>
      </div>
    </div>
  );
};

export default Home;
