import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow } from "swiper";
import ButtonArrow from "./buttons/buttonArrow";

const Slider = ({ slides }) => {
  const renderedSlides = slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="position-relative">
        <span className="discount">{slide.discount}% OFF</span>
        <img src={slide.imageUrl} alt={slide.type} />
        <div className="slider__content bg-white p-5 pt-2 shadow-sm">
          <h5 className="fw-semibold">{slide.type}</h5>
          <ul className="d-flex justify-content-between align-items-center w-50 opacity-50 fw-semibold list-unstyled">
            <li>
              <i className="fa-solid fa-bed me-2"></i>
              {slide.beds}
            </li>
            <li>
              <i className="fa-solid fa-bath me-2"></i>
              {slide.bathroom}
            </li>
            <li>
              <i className="fa-solid fa-up-right-and-down-left-from-center fa-rotate-270 me-2"></i>
              {slide.priority}
            </li>
          </ul>
          <footer className="d-flex align-items-center justify-content-between">
            <span className="fw-semibold">
              ${slide.price}
              <span className=" fw-normal">/day</span>
            </span>
            <ButtonArrow link={`/rooms/${slide.id}`} theme="dark">
              <i className="fa-solid fa-chevron-right"></i>
            </ButtonArrow>
          </footer>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3.5,
      }}
      modules={[EffectCoverflow]}
      className="swiper_container"
    >
      {renderedSlides}
    </Swiper>
  );
};

export default Slider;
