import React from "react";
import Header from "./hero";
import Facilities from "./facilities";
import Features from "./features";
import Testimonials from "./testimonials";
import Subscribe from "./subscribe";
import RecommendedRooms from "./recommendedRooms";

const Home = () => {
  return (
    <>
      <Header />
      <RecommendedRooms />
      <Facilities />
      <Features />
      <Testimonials />
      <Subscribe />
    </>
  );
};

export default Home;
