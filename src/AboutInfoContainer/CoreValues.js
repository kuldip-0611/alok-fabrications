import React from "react";
import customerIcon from "../Assets/icons/customer-icon.png";
import startIcon from "../Assets/icons/start-icon.png";
import ideaIcon from "../Assets/icons/idea-icon.png";

const CoreValues = () => {
  return (
    <div className="about-info-container">
      <p className="title-text-about">Core Values</p>
      <div className="container_core_icon">
        <div className="core_value_icon_cover">
          <div>
            <img
              src={customerIcon}
              alt={"customer icon"}
              height={46}
              width={46}
            />
          </div>
          <p className="text-center fw-bold core_icon_text">
            Customer <br />
            Satisfaction
          </p>
        </div>
        <div className="core_value_icon_cover">
          <div>
            <img src={startIcon} alt={"customer icon"} height={46} width={46} />
          </div>
          <p className="text-center fw-bold core_icon_text">Excellence</p>
        </div>
      </div>

      <div className="container_core_icon">
        <div className="core_value_icon_cover">
          <div>
            <img src={ideaIcon} alt={"customer icon"} height={46} width={46} />
          </div>
          <p className="text-center fw-bold core_icon_text">Innovative</p>
        </div>

        <div className="core_value_icon_cover">
          <div>
            <img src={ideaIcon} alt={"customer icon"} height={46} width={46} />
          </div>
          <p className="text-center fw-bold core_icon_text">Innovative</p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
