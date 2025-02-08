// eslint-disable-next-line

import "./hero.css";
import image from "../Assets/hero.png"; // Ensure the correct path

const Hero = () => {
  return (
    <div className="container-fluid p-0">
      <img
        src={image}
        className="img-fluid w-100 custom-img"
        alt="banner"
      />
    </div>
  );
};

export default Hero;
