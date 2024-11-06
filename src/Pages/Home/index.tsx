import React from "react";
import Banner from "./Components/Banner";
import Marquee from "./Components/Marquee";
import Change from "./Components/Change";
import Featured from "./Components/Featured";
import Seller from "./Components/Seller";
import Brand from "./Components/Brand";
import WeekSection from "./Components/WeekSection";
import Testimonial from "./Components/Testimonial";
import Contact from "../../Components/Contact";


const Home = () => {
  return (
    <>
      <Banner />
      <Marquee />
      <Change />
      <Featured />
      <Seller />
      <Brand />
      <WeekSection />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
