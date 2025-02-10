// eslint-disable-next-line
import React from "react";
import "./aboutInfoContainer.css";

const AboutVissionAndMission = ({ title, textOne, textTwo, image }) => {
  return (
    <>
      <div className="about-info-container">
        <p className="title-text-about">{title}</p>
        <p className="desription-text">{textOne}</p>
        <p className="desription-text">{textTwo}</p>
      </div>
      {image ? image : null}
    </>
  );
};

export default AboutVissionAndMission;
