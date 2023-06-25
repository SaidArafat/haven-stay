import React from "react";
import ButtonArrow from "../../components/common/buttons/buttonArrow";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      discount: 25,
      priority: "110",
      imageUrl:
        "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "100",
      beds: "2",
      bathroom: "1",
    },
    {
      id: 2,
      discount: 35,
      priority: "120",
      imageUrl:
        "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Double Contrast Room",
      price: "150",
      beds: "3",
      bathroom: "1",
    },
    {
      id: 3,
      discount: 15,
      priority: "110",
      imageUrl:
        "https://images.pexels.com/photos/4153150/pexels-photo-4153150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "200",
      beds: "3",
      bathroom: "1",
    },

    {
      id: 4,
      discount: 20,
      priority: "160",
      imageUrl:
        "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Double Contrast Room",
      price: "150",
      beds: "3",
      bathroom: "1",
    },
    {
      id: 5,
      discount: 15,
      priority: "220",
      imageUrl:
        "https://images.pexels.com/photos/4153150/pexels-photo-4153150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "100",
      beds: "2",
      bathroom: "1",
    },
    {
      id: 6,
      discount: 30,
      priority: "190",
      imageUrl:
        "https://images.pexels.com/photos/5490301/pexels-photo-5490301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "150",
      beds: "3",
      bathroom: "1",
    },
    {
      id: 7,
      discount: 25,
      priority: "120",
      imageUrl:
        "https://images.pexels.com/photos/4153150/pexels-photo-4153150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Double Contrast Room",
      price: "180",
      beds: "2",
      bathroom: "1",
    },
    {
      id: 8,
      discount: 30,
      priority: "220",
      imageUrl:
        "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Single Contrast Room",
      price: "150",
      beds: "3",
      bathroom: "1",
    },
  ];

  return (
    <section>
      <h2 className="fw-semibold fs-3 text-center my-4">Rooms</h2>
      <div className="row">
        {rooms.map((slide, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="position-relative rounded-5 overflow-hidden  h-75">
                <span className="discount">{slide.discount}% OFF</span>
                <img className="h-75" src={slide.imageUrl} alt={slide.type} />
                <div className="bg-white p-3 shadow-sm">
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
                      <span className="fw-normal">/day</span>
                    </span>
                    <ButtonArrow link={`/rooms/${slide.id}`} theme="dark">
                      <i className="fa-solid fa-chevron-right"></i>
                    </ButtonArrow>
                  </footer>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Rooms;
