import React from "react";
import ProfilePic from "../Assets/hult-prize.png";
import { AiFillStar } from "react-icons/ai";

const Achievements = () => {
  return (
    <div className="work-section-wrapper" id="achievements">
      <div className="work-section-top">
        <p className="primary-subheading">Achievements</p>
        <h1 className="primary-heading">Our accomplishments</h1>
        <p className="primary-text">
          Our ideas are unfolding before our very own eyes!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        We are proud to announce that we will be representing our institution, the University of Ibadan, at the regional level of the Hult Prize Global Summit. This opportunity follows our victory as the overall winner in the onCampus phase of the Hult prize competition.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Hult Prize</h2>
      </div>
    </div>
  );
};

export default Achievements;
