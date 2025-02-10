// eslint-disable-next-line
import React from "react";
import "./aboutInfoContainer.css";

const AboutInfoContainer = ({ title, text, image }) => {
  return (
    <>
      <div className="about-info-container">
        <p className="title-text-about">{title}</p>
        <p className="desription-text">{text}</p>
      </div>
      {image ? image : null}
    </>
  );
};

export default AboutInfoContainer;
