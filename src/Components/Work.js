import React from "react";
import pc from "../Assets/pc.jpg";
import phones from "../Assets/phone.jpg";
import freezers from "../Assets/freezer.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: pc,
      title: "Laptops",
      text: "Charge average Nigerians laptops up to 14 times.",
    },
    {
      image: phones,
      title: "Mobile Phones",
      text: "Can fully charge average Nigerians phones up to 30 times.",
    },
    {
      image: freezers,
      title: "Freezers",
      text: "Capable of powering modern freezers with power rating of 100 - 200 watts.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-subheading">NetXus Capacity</h1>
        <h1 className="primary-heading">What can NetXus do?</h1>
        <p className="primary-text">
          Our product boasts an impressive power output of 40KWh when fully charged, which means it can:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
