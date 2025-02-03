import React from "react";
import "./aboutInfoContainer.css";

const AboutInfoContainer = ({ title, text, image }) => {
  return (
    <div className="about-info-container">
      <p className="title-text">{title}</p>
      <p className="desription-text">{text}</p>
      {image && <img src={image} />}
    </div>
  );
};

export default AboutInfoContainer;
