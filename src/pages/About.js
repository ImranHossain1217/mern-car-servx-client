import React from "react";
import Person from '../assets/images/about_us/person.jpg';
import parts from '../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 relative">
          <img
            src={Person}
            className=" w-3/4 rounded-lg shadow-2xl"
            alt="about-us"
          />
          <img
            src={parts}
            className="absolute right-5 top-1/2 w-1/2 rounded-lg shadow-2xl"
            alt="about-us"
          />
        </div>
        <div className="md:w-1/2">
        <h4 className="text-xl font-bold text-orange-600 uppercase">About Us</h4>
          <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
          <p className="py-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
