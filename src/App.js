import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./App.css";
import NavMenu from "./components/common/NavMenu";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Home/Banner";
import Headline from "./components/common/Headline";
function App() {
  return (
    <div>
      <NavMenu />
      <Banner />
      <Headline />
    </div>
  );
}

export default App;
