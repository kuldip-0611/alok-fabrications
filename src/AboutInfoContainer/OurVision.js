import React from "react";
import sampleImage1 from "../Assets/samples/sampleimage1.png";
import sampleImage2 from "../Assets/samples/sampleimage2.png";
import sampleImage3 from "../Assets/samples/sampleimage3.png";
import sampleImage4 from "../Assets/samples/sampleimage4.png";
import sampleImage5 from "../Assets/samples/sampleimage5.png";
import sampleImage6 from "../Assets/samples/sampleimage6.png";
import sampleImage7 from "../Assets/samples/sampleimage7.png";
import sampleImage8 from "../Assets/samples/sampleimage8.png";
import sampleImage9 from "../Assets/samples/sampleimage9.png";
import sampleImage10 from "../Assets/samples/sampleimage10.png";

const OurVision = () => {
  return (
    <div className="about-info-container">
      <p className="title-text-about">Our Material</p>
      <p className="mt-3 mb-3 out_material_text">
        In our pursuit of perfection, we use only the finest materials,
        including:
      </p>
      <ul className="out_material_text mb-5">
        <li>
          Stainless Steel Variants: <br />
          AISI 304/L, 316, 321, 321H, 310
        </li>
        <li>
          Exotic Metals: <br />
          Inconel, Hastelloy, Monel, Alloy 20, Titanium
        </li>
      </ul>
      <div className="our_mission_image_grid">
        <img
          src={sampleImage1}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
        <img
          src={sampleImage2}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
        <img
          src={sampleImage3}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
        <img
          src={sampleImage4}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
        <img
          src={sampleImage5}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
        <img
          src={sampleImage6}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
        <img
          src={sampleImage7}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
        <img
          src={sampleImage8}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
        <img
          src={sampleImage9}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
        <img
          src={sampleImage10}
          alt={"grid our mission"}
          width={124}
          height={124}
        />
      </div>
    </div>
  );
};

export default OurVision;
