import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer text-light py-3">
      <Container>
        <Row className="justify-content-between align-items-center flex-wrap">
          <Col className="text-start justify-content-start">
            <p className="mb-0 text-start">
              © 2025 Alok Fabrications | Contact:{" "}
              <a
                href="mailto:alokfabrications@gmail.com"
                className="footer-email text-start"
              >
                alokfabrications@gmail.com
              </a>
            </p>
          </Col>
          <Col className="d-flex flex-wrap gap-4 justify-content-end">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/about" className="footer-link">
              About Us
            </Link>
            <Link to="/products" className="footer-link">
              Products
            </Link>
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
