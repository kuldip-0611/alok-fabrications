import React, { useState } from "react";
import "./aboutUsLayout.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "../Navbar";
import AboutInfoContainer from "../../AboutInfoContainer/AboutInfoContainer";

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
            title={"We don’t just shape Metal, We shape the Industry."}
            text={
              "When it comes to manufacturing superior industrial equipment, your search ends here. Welcome to Alok Fabrications, where quality isn't just a promise, it's our foundation. From high-quality manufacturing to expert fabrication, we obsess over every detail, ensuring your vision becomes reality with products that are built to perform and last."
            }
          />
        );
      case "Your Vision, Our Mission":
        return (
          <AboutInfoContainer
            title={"Your Vision, Our Misson"}
            text={
              "At Alok Fabrications, we believe metal can be a force for good. That’s why we craft not only top-tier equipment but also a more sustainable future. Collaboration is our cornerstone, because your success is our success. Every project is an opportunity to showcase our passion and turn your vision into reality."
            }
          />
        );
      case "Core Values":
        return <p>These are the core values we believe in...</p>;
      case "Industries We Serve":
        return <p>We serve a variety of industries...</p>;
      case "Why Choose Us":
        return <p>Reasons why you should choose us...</p>;
      case "Our Vision":
        return <p>Our long-term vision for the future...</p>;
      default:
        return <p>Select a menu item to view more details...</p>;
    }
  };

  return (
    <Container fluid className="main-container">
      <CustomNavbar />
      <Row className="content-row">
        <Col xs={12} md={9} lg={9} className="content">
          <Button
            variant="primary"
            className="d-md-none"
            onClick={() => setShowSidebar(true)}
          >
            Open Sidebar
          </Button>

          {renderContent()}
        </Col>
        <Col
          xs={12}
          md={3}
          lg={3}
          className={`sidebar ${showSidebar ? "show" : ""}`}
        >
          <Button
            variant="outline-primary"
            className="d-md-none mb-3"
            onClick={() => setShowSidebar(false)}
          >
            Close
          </Button>
          <ul className="menu">
            {menuItems.map((item) => (
              <li
                key={item}
                className={activeItem === item ? "active" : ""}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsLayout;
