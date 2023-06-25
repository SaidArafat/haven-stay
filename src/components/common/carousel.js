import React, { useState } from "react";
import CarouselSlide from "./carouselSlide";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <CarouselSlide
      slide={slides[currentIndex]}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
    />
  );
};

export default Carousel;
