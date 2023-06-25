import React from "react";
import Carousel from "./common/carousel";

const Testimonials = () => {
  const slides = [
    {
      id: 4,
      rate: 5,
      author: "mohamad khaled",
      jobTitle: "AI Developer",
      description:
        "The bed was incredibly cozy, providing an exceptional level of comfort throughout my stay. The apartment exceeded all my expectations, making it a truly remarkable experience. throughout my stay.",
      imageUrl:
        "https://images.pexels.com/photos/3252086/pexels-photo-3252086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      rate: 3,
      author: "Floyd Miles",
      jobTitle: "Front-End Developer",
      description:
        "The be was extremely comfortable. Every thing was great at this apartment.. amazing staff that is friendly and makes customers feel welcome. I'll be back in month! will definitely stay there when I come back!",
      imageUrl:
        "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      id: 3,
      rate: 4,
      author: "Michael Statt",
      jobTitle: "IT Support",
      description:
        "Without a doubt, this apartment offers an unbeatable level of comfort. The staff's friendliness and welcoming nature added an extra layer of delight to my stay. I'm already looking forward to returning in a month and staying there again!",
      imageUrl:
        "https://images.pexels.com/photos/4947563/pexels-photo-4947563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      rate: 3,
      author: "Johan Cr",
      jobTitle: "IT Professional",
      description:
        "I can't emphasize enough how wonderful my stay was at this apartment. From the exceptionally comfortable bed to the outstanding staff who warmly welcomed me, every aspect of my visit was nothing short of amazing.",
      imageUrl:
        "https://images.pexels.com/photos/2635314/pexels-photo-2635314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      rate: 4,
      author: "Mostaf k",
      jobTitle: "Back End Developer",
      description:
        "The be was extremely comfortable. Every thing was great at this apartment.. amazing staff that is friendly and makes customers feel welcome. I'll be back in month! will definitely stay there when I come back!",
      imageUrl:
        "https://images.pexels.com/photos/4618583/pexels-photo-4618583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="p-5">
      <Carousel slides={slides} />
    </section>
  );
};

export default Testimonials;
