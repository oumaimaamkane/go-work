import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function HomeSlides({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  const goLeft = () => {
    setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  };

  const goRight = () => {
    setCurr(curr === slides.length - 1 ? 0 : curr + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <button
        onClick={goLeft}
        className="hidden absolute z-30 top-1/2 w-10 h-10 md:w-14 md:h-14 md:flex items-center justify-center rounded-full text-white bg-[#030303] hover:hover:bg-gray-800 md:left-10"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button
        onClick={goRight}
        className="hidden absolute z-30 top-1/2 w-10 h-10 md:w-14 md:h-14 md:flex items-center justify-center rounded-full text-white bg-[#030303] hover:hover:bg-gray-800 md:right-10"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
    </div>
  );
}

HomeSlides.propTypes = {
  children: PropTypes.node.isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};