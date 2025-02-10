import React from "react";
import customerIcon from "../Assets/icons/customer-icon.png";
import detailsIcon from "../Assets/icons/details-icon.png";
import qualityIcon from "../Assets/icons/quality-icon.png";
import customizationIcon from "../Assets/icons/customization-icon.png";

const WhyChooseUs = () => {
  return (
    <div className="about-info-container">
      <p className="title-text-about">Why Choose Us</p>
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
            Unmatched <br />
            Experience
          </p>
        </div>
        <div className="core_value_icon_cover">
          <div>
            <img
              src={detailsIcon}
              alt={"customer icon"}
              height={46}
              width={46}
            />
          </div>
          <p className="text-center fw-bold core_icon_text">
            Unwavering Precision/
            <br />
            Unmatched Detail
          </p>
        </div>
      </div>

      <div className="container_core_icon">
        <div className="core_value_icon_cover">
          <div>
            <img
              src={qualityIcon}
              alt={"customer icon"}
              height={46}
              width={46}
            />
          </div>
          <p className="text-center fw-bold core_icon_text">
            Uncompromising
            <br />
            Quality
          </p>
        </div>

        <div className="core_value_icon_cover">
          <div>
            <img
              src={customizationIcon}
              alt={"customer icon"}
              height={46}
              width={46}
            />
          </div>
          <p className="text-center fw-bold core_icon_text">
            Unbounded
            <br />
            Customization
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
