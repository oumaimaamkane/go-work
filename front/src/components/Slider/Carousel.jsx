import { useState, useEffect } from "react";

import PropTypes from "prop-types";

export default function Carousel({
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

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-[6px] h-[6px] md:w-3 md:h-3 bg-white rounded-full
              ${curr === i ? "p-[6px] md:p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};
