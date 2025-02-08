import React from "react";
import Slider from "react-slick";
import "./client.css";
import landt from "../../Assets/L&T.png";
import disa from "../../Assets/disa.png";
import hyundai from "../../Assets/hyundai.png";

const Clients = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 5,
    speed: 1500,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px", // Adjusted for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px", // Adjusted for smaller screens
        },
      },
    ],
  };

  return (
    <section id="clients" className="text-center pt-5 pb-5">
      <div className="container">
        <div className="row">
          <h2 className="client-title mb-4">Our Clients</h2>
          <Slider className='slider-width' {...settings}>
            {[landt, disa, hyundai, landt, disa, hyundai].map((logo, index) => (
              <div key={index}>
                <img src={logo} alt="Client Logo" className="img-fluid" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;