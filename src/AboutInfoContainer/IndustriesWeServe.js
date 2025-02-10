import React from "react";
import TexttileIndustryIcon from "../Assets/icons/Texttile-icon.png";
import PharmaIcon from "../Assets/icons/pharma-icon.png";
import TextTileIcon from "../Assets/icons/Texttile-icon.png";
import defenceIcon from "../Assets/icons/defence-icon.png";
import DairyIcon from "../Assets/icons/dairy-icon.png";
import FoodIcon from "../Assets/icons/food-icon.png";
import OilIcon from "../Assets/icons/oil-icon.png";
import ChemicalIcon from "../Assets/icons/chamical-icon.png";
import FiberIcon from "../Assets/icons/fiber-icon.png";

const IndustriesWeServe = () => {
  return (
    <div className="about-info-container">
      <p className="title-text-about">Industries We Serve</p>
      <div className="container_industries_we_serve">
        <div className="industries_we_serve">
          <div>
            <img
              src={TexttileIndustryIcon}
              alt={"customer icon"}
              height={50}
              width={50}
            />
          </div>
          <p className="industries_we_serve_text">
            Textile
            <br />
            Industry
          </p>
        </div>
        <div className="industries_we_serve">
          <div>
            <img
              src={PharmaIcon}
              alt={"customer icon"}
              height={50}
              width={50}
            />
          </div>
          <p className="industries_we_serve_text">Pharmaceu--ical</p>
        </div>
        <div className="industries_we_serve">
          <div>
            <img
              src={defenceIcon}
              alt={"customer icon"}
              height={50}
              width={50}
            />
          </div>
          <p className="industries_we_serve_text">
            Defence
            <br />
            Sector
          </p>
        </div>
        <div className="industries_we_serve">
          <div>
            <img src={DairyIcon} alt={"customer icon"} height={50} width={50} />
          </div>
          <p className="industries_we_serve_text">
            <br />
            Dairy
          </p>
        </div>
        <div className="industries_we_serve">
          <div>
            <img src={FoodIcon} alt={"customer icon"} height={50} width={50} />
          </div>
          <p className="industries_we_serve_text">
            Food
            <br />
            Processing
          </p>
        </div>
        <div className="industries_we_serve">
          <div>
            <img src={OilIcon} alt={"customer icon"} height={50} width={50} />
          </div>
          <p className="industries_we_serve_text">
            Oil and
            <br />
            Gas
          </p>
        </div>
        <div className="industries_we_serve">
          <div>
            <img
              src={ChemicalIcon}
              alt={"customer icon"}
              height={50}
              width={50}
            />
          </div>
          <p className="industries_we_serve_text">
            Chemical
            <br />
            Plants
          </p>
        </div>
        <div className="industries_we_serve">
          <div>
            <img src={FiberIcon} alt={"customer icon"} height={50} width={50} />
          </div>
          <p className="industries_we_serve_text">
            Man-Made
            <br />
            Fiber
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
