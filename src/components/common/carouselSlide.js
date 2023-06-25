import React from "react";
import ButtonArrow from "./buttons/buttonArrow";

const CarouselSlide = ({ slide, prevSlide, nextSlide }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < slide.rate; i++) {
      stars.push(<i key={i} className="fa-solid fa-star fs-5 me-2"></i>);
    }
    return stars;
  };

  return (
    <div className="testimonial">
      <div className="testimonial__image rounded-5 overflow-hidden">
        <img className="" src={slide.imageUrl} alt={slide.author} />
      </div>
      <div className="testimonial__content p-3 d-flex justify-content-around flex-column">
        <div>
          <h3 className="mb-0 fs-3 text-capitalize">{slide.author}</h3>
          <p className="opacity-50 text-capitalize">{slide.jobTitle}</p>
          <div className="text-warning">{renderStars()}</div>
        </div>
        <blockquote className="quote">
          <p className="quote__text">{slide.description}</p>
        </blockquote>
        <div>
          <ButtonArrow onClick={prevSlide} theme="light">
            <i className="fa-solid fa-chevron-left"></i>
          </ButtonArrow>
          <ButtonArrow onClick={nextSlide} theme="dark">
            <i className="fa-solid fa-chevron-right"></i>
          </ButtonArrow>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
