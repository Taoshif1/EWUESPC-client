import { Helmet } from "react-helmet-async";
import HeroCarousel from "../components/home/HeroCarousel";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>EWUESPC | Home</title>
      </Helmet>

      <HeroCarousel />
    </>
  );
};

export default Home;