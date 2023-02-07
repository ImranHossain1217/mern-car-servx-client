import React from "react";
import Banner from "../components/Banner";
import HomeContact from "../components/HomeContact";
import OurTeam from "../components/OurTeam";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-5">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <HomeContact></HomeContact>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
