// Components
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Slider from "../components/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div>
      <Announcment />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
}

export default Home;
