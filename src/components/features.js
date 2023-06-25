import React from "react";
import Feature from "./common/feature";

const Features = () => {
  const data = [
    {
      id: 1,
      title: "restaurant",
      image:
        "https://images.pexels.com/photos/1861785/pexels-photo-1861785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption:
        "A restaurant or and eatery, is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.",
    },
    {
      id: 2,
      title: "GYM center",
      image:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption:
        "Fitness clubs or gyms may be defined as any person, firm, corporation, organization, club, or association engaged in the sale of instruction, training or assistance in program of physical exercise or weight reduction.",
    },
    {
      id: 3,
      title: "swimming pool",
      image:
        "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption:
        "Swimming pools are places of relaxation, ease, calmness, and pleasure. These dreams could also indicate repressing emotions and feeling bad because of that. This dream could indicate that you need to get in touch with your feelings.",
    },
  ];

  return (
    <section className="mt-5 py-5">
      <h2 className="text-center fw-bold fs-2 mb-5 w-50 mx-auto">
        We organize the most popular facilities to our customers
      </h2>
      <div className="">
        {data.map((item, index) => (
          <div
            key={index}
            className={`row gy-3 py-3 align-items-center ${
              (index + 1) % 2 === 0 && "flex-row-reverse"
            }`}
          >
            <Feature feature={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
