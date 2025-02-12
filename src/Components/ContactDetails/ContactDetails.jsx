import React from "react";
import "./ContactDetails.css";
import homeicon from "../../Assets/home.png";
import phoneicon from "../../Assets/phone.png";
import mailicon from "../../Assets/mail.png";
import rightArrow from "../../Assets/Product/Frame.png";
import { Link } from "react-router-dom";

const ContactDetails = () => {
  return (
    <div className="bg_gray">
      <section className="container  pb-4">
        <div className="row">
          <p className="Contact_US_Title mt-5">Shaping Industry Together</p>
          <p className="Contact_US_discription mt-3">
            When it comes to industrial equipment, experience matters. With
            years of expertise and a dedication to quality, we're the reliable
            partner you need. Get a quote today and see why businesses trust us
            for durable, high-performance equipment.
          </p>
          <div className="cu_blue_container mt-3">
            <div className="cu_blue_con">
              <p className="cu_mainblock_title">
                To <br />
                Alok Fabrications
              </p>
              <div className="cu_information">
                <div className="cu_icon_text_container">
                  <img
                    className="cu_icon_blue"
                    src={homeicon}
                    height={24}
                    width={24}
                    alt="home Icon"
                  />
                  <p className="Contact_US_discription color_white">
                    <a
                      className="cu_a_tag"
                      href="https://maps.app.goo.gl/CBp4Hsv6GpzqN7wi6"
                    >
                      W-124, S Block, MIDC, Bhosari, Pune 411026
                    </a>
                  </p>
                </div>
                <div className="cu_icon_text_container">
                  <img
                    className="cu_icon_blue"
                    src={phoneicon}
                    height={24}
                    width={24}
                    alt="home Icon"
                  />
                  <p className="Contact_US_discription color_white">
                    <a className="cu_a_tag" href="tel:+919822048785">
                      9822048785
                    </a>
                  </p>
                </div>
                <div className="cu_icon_text_container">
                  <img
                    className="cu_icon_blue"
                    src={mailicon}
                    height={24}
                    width={24}
                    alt="home Icon"
                  />
                  <p className="Contact_US_discription color_white">
                    <a className="cu_a_tag" href="mailto:bb@alokfab.in">
                      bb@alokfab.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="contact_center mt-3 mb-3">
                <Link to={'/thank-you'} className="contact_center">
                  Click Here
                  <img
                    className="cu_icon_blue m-2"
                    src={rightArrow}
                    height={20}
                    width={20}
                    alt="home Icon"
                  />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            paddingBottom: "400px",
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.651356741231!2d73.8349232!3d18.6342288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e5c3c7e36b%3A0x318ec97ab62951d0!2sALOK%20FABRICATIONS!5e0!3m2!1sen!2sin!4v1739287782713!5m2!1sen!2sin"
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "98%",
              height: "100%",
              border: 0,
              zIndex: 100,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
