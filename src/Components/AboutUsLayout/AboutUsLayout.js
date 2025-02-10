import React, { useState } from "react";
import "./aboutUsLayout.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "../Navbar";
import AboutInfoContainer from "../../AboutInfoContainer/AboutInfoContainer";
import Footer from "../Footer/Footer";
import aboutimage from "../../Assets/aboutusImage.png";
import vissionimage from "../../Assets/vissionimage.png";
import AboutVissionAndMission from "../../AboutInfoContainer/AboutVissionAndMission";
import CoreValues from "../../AboutInfoContainer/CoreValues";
import IndustriesWeServe from "../../AboutInfoContainer/IndustriesWeServe";
import WhyChooseUs from "../../AboutInfoContainer/WhyChooseUs";
import OurVision from "../../AboutInfoContainer/OurVision";

const AboutUsLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeItem, setActiveItem] = useState("About Us");

  const menuItems = [
    "About Us",
    "Your Vision, Our Mission",
    "Core Values",
    "Industries We Serve",
    "Why Choose Us",
    "Our Vision",
  ];

  const renderContent = () => {
    switch (activeItem) {
      case "About Us":
        return (
          <AboutInfoContainer
            title={"We don’t just shape Metal, We shape the Industry."}
            text={
              "When it comes to manufacturing superior industrial equipment, your search ends here. Welcome to Alok Fabrications, where quality isn't just a promise, it's our foundation. From high-quality manufacturing to expert fabrication, we obsess over every detail, ensuring your vision becomes reality with products that are built to perform and last."
            }
            image={<img src={aboutimage} alt="images" height={350} />}
          />
        );
      case "Your Vision, Our Mission":
        return (
          <AboutVissionAndMission
            title={"Your Vision, Our Misson"}
            textOne={
              "At Alok Fabrications, we believe metal can be a force for good. That’s why we craft not only top-tier equipment but also a more sustainable future."
            }
            textTwo={
              "Collaboration is our cornerstone, because your success is our success. Every project is an opportunity to showcase our passion and turn your vision into reality."
            }
            image={<img src={vissionimage} alt="images" height={350} />}
          />
        );
      case "Core Values":
        return <CoreValues />;
      case "Industries We Serve":
        return <IndustriesWeServe />;
      case "Why Choose Us":
        return <WhyChooseUs />;
      case "Our Vision":
        return <OurVision />;
      default:
        return (
          <AboutInfoContainer
            title={"We don’t just shape Metal, We shape the Industry."}
            text={
              "When it comes to manufacturing superior industrial equipment, your search ends here. Welcome to Alok Fabrications, where quality isn't just a promise, it's our foundation. From high-quality manufacturing to expert fabrication, we obsess over every detail, ensuring your vision becomes reality with products that are built to perform and last."
            }
            image={<img src={aboutimage} alt="images" height={350} />}
          />
        );
    }
  };

  return (
    <div className="main-container">
      <section className="section_Header">
        <CustomNavbar />
      </section>
      <section className="section_about">
        <Container>
          <Row className="content-row">
            <Col xs={12} md={8} lg={8} className="content">
              <Button
                variant="primary"
                className="d-md-none mb-4"
                onClick={() => setShowSidebar(true)}
              >
                Open Sidebar
              </Button>

              {renderContent()}
            </Col>
            <Col
              xs={12}
              md={4}
              lg={4}
              className={`sidebar ${showSidebar ? "show" : ""}`}
            >
              <Button
                variant="outline-primary"
                className="d-md-none mb-3 close_button_sm_right"
                onClick={() => setShowSidebar(false)}
              >
                Close
              </Button>
              <ul className="menu">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className={activeItem === item ? "active" : ""}
                    onClick={() => {
                      setActiveItem(item);
                      setShowSidebar(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_footer">
        <Footer />
      </section>
    </div>
  );
};

export default AboutUsLayout;
