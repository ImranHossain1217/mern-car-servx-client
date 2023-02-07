import React from "react";
import team1 from "../assets/images/team/1.jpg";
import team2 from "../assets/images/team/2.jpg";
import team3 from "../assets/images/team/3.jpg";

const OurTeam = () => {
  return (
    <div className="my-8">
      <div className="text-center my-5">
        <p className="text-lg text-orange-600 mb-2 font-bold uppercase">team</p>
        <h2 className="text-2xl md:text-4xl font-semibold mb-2">
          Meet Our Team
        </h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={team1} alt="team-1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Liam Dawson</h2>
            <p className="text-md font-semibold text-orange-600">
              Engine Expert
            </p>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={team2} alt="team-2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Oliver Smith</h2>
            <p className="text-md font-semibold text-orange-600">
              Engine Expert
            </p>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={team3} alt="team-3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Devid Lucas</h2>
            <p className="text-md font-semibold text-orange-600">
              Engine Expert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
