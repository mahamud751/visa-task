import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./App.css";
import NavMenu from "./components/common/NavMenu";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Home/Banner";
import Headline from "./components/Home/Headline";
import Footer from "./components/common/Footer";
import Brand from "./components/Home/Brand";
import Review from "./components/Home/Review";

function App() {
  return (
    <div>
      <NavMenu />
      <Banner />
      <Headline />
      <Review />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
