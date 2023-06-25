import React from "react";
import Icon from "./common/icons/icon";

const Facilities = () => {
  const facilities = [
    { icon: "fa-solid fa-laptop", name: "private workspace" },
    { icon: "fa-solid fa-laptop", name: "outdoor workspace" },
    { icon: "fa-solid fa-person-swimming", name: "swimming pool" },
    { icon: "fa-solid fa-square-parking", name: "parking area" },
    { icon: "fa-solid fa-wifi", name: "Free wifi" },
    { icon: "fa-solid fa-mug-saucer", name: "Breakfast" },
    { icon: "fa-solid fa-shirt", name: "laundry service" },
    { icon: "fa-solid fa-shirt", name: "laundry service" },
    { icon: "fa-solid fa-dumbbell", name: "others" },
  ];

  const renderedFacilities = facilities.map((item, index) => (
    <div className="col-md-4 col-sm-6 text-center" key={index}>
      <Icon icon={item.icon}>{item.name}</Icon>
    </div>
  ));

  return (
    <section className="p-5 facilities mt-3 rounded-5">
      <h2 className="text-center fw-bold">
        Sea the facilities we provide in real time
      </h2>
      <div className="row g-5 p-3 mt-3 justify-content-center">
        {renderedFacilities}
      </div>
    </section>
  );
};

export default Facilities;
