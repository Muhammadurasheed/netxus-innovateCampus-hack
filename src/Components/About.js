import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import pitch_video from '../vid/NetXus-solution-pitch.mp4';
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-subheading">About</h1>
        <h4 className="primary-heading">
          Consistent Power is essential for Students and businesses
        </h4>
        <p className="primary-text">
          At NetXus, We merge solar energy with human power to create renewable
          and sustainable energy tailored to meet the unique needs of the
          people. <br />
          Our innovative supplementary cranking feature enables users to
          generate electricity on demand, providing enough power for our system
          with just 5 minutes of cranking. Additionally, our product is
          IoT-enabled, offering benefits such as remote monitoring and control,
          real-time notifications on mobile devices regarding product status,
          auto-self troubleshooting, and ability to locate nearby charging
          stations for business users.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button" onClick={openVideoModal}>
            <BsFillPlayCircleFill /> Watch Our Pitch Video
          </button>
        </div>
      </div>
      {showVideoModal && (
        <div className="video-modal">
          <div className="video-modal-content">
            <span className="close" onClick={closeVideoModal}>
              &times;
            </span>
            <video controls>
              <source src={pitch_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
