import React from "react";
import img1 from "../assets/images/banner/5.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/6.jpg";
import img4 from "../assets/images/banner/1.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-md">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img1} className="w-full" alt="slider" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16 top-1/4 md:top-44">
          <h1 className="text-2xl md:text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16 top-2/4 md:top-80">
          <p className="text-white md:text-lg">
            There are many variations of passages of available, <br /> but the
            majority have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16 top-3/4 md:top-96">
          <button className="btn btn-warning mr-5">Discover More</button>
          <button className="btn btn-outline btn-warning">
            Latest Project
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img2} className="w-full" alt="slider" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16  top-1/4 md:top-44">
          <h1 className="text-2xl md:text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16  top-2/4 md:top-80">
          <p className="text-white md:text-lg">
            There are many variations of passages of available, <br /> but the
            majority have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16  top-3/4 md:top-96">
          <button className="btn btn-warning mr-5">Discover More</button>
          <button className="btn btn-outline btn-warning">
            Latest Project
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img3} className="w-full" alt="slider" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16  top-1/4 md:top-44">
          <h1 className="text-2xl md:text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16  top-2/4 md:top-80">
          <p className="text-white md:text-lg">
            There are many variations of passages of available, <br /> but the
            majority have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16  top-3/4 md:96">
          <button className="btn btn-warning mr-5">Discover More</button>
          <button className="btn btn-outline btn-warning">
            Latest Project
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16  top-1/4 md:top-44">
          <h1 className="text-2xl md:text-6xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32 left-16  top-2/4 md:top-80">
          <p className="text-white md:text-lg">
            There are many variations of passages of available, <br /> but the
            majority have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-32  left-16 top-3/4 md:top-96">
          <button className="btn btn-warning mr-5">Discover More</button>
          <button className="btn btn-outline btn-warning">
            Latest Project
          </button>
        </div>
        <div className="carousel-img">
          <img src={img4} className="w-full" alt="slider" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
