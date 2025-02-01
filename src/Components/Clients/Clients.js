import React from "react";
import Slider from "react-slick";
import "./client.css";

const Clients = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="clients" className="py-5 text-center">
      <div className="container">
        <h2 className="client-title">Our Clients</h2>
        <Slider {...settings}>
          {["hyundai.png", "disa.png", "hyundai2.png"].map((logo, index) => (
            <div key={index}>
              <img
                src={`/logos/${logo}`}
                alt="Client Logo"
                className="img-fluid"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
