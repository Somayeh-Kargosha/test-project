import { useState } from "react";
import { HiArrowRightCircle } from "react-icons/hi2";
import { HiArrowLeftCircle } from "react-icons/hi2";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  return (
    <div className="">
      <div
        style={{ transform: `translateX(-${current * 100}%)` }}
        className="flex transition ease-out duration-40"
      >
        {slides.map((s) => {
          return <img src={s} alt="carsoul" />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-1 text-xl">
        <button onClick={previousSlide}>
          <HiArrowRightCircle />
        </button>
        <button>
          <HiArrowLeftCircle onClick={nextSlide} />
        </button>
      </div>
      <div className="absolute bottom-0 gap-3 flex justify-end w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              className={`rounded-full cursor-pointer w-2 h-2 ${i === current ? "bg-white" : "bg-gray-500"}`}
            ></div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default Carousel;
