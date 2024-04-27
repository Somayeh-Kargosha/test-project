import Carousel from "../../ui/Carousel";
import NavSection from "../../ui/NavSection";
import ProductItems from "../../ui/ProductItems";
function Home() {
  const slides = ["/Baner.jpg", "/1.jpg", "/2.jpg", "/4.jpg", "/5.jpg"];
  return (
    <div className="grid h-screen grid-rows-3">
      <div className="w-full h-48 self-start overflow-hidden relative">
        <Carousel slides={slides} />
      </div>

      <ProductItems />

      <NavSection />
    </div>
  );
}

export default Home;
