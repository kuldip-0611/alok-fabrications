// eslint-disable-next-line
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./footer.css";
import mailIcon from "../../Assets/mailIcon.png";

const Footer = () => {
  return (
    <footer class="text-center">
      <div class="container pt-1">
        <hr className="footer_horizontal_line" />
        <div class="row">
          <div class="col-md-12 footer-section">
            <p className="m-2">Copyright ©2025. Alok fabrications.</p>
            <Navbar className="footer-navbar ">
              <Container>
                <Navbar.Collapse className="flex-wrap" id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/about"
                      className="nav-link"
                      activeClassName="active"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/products"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Products
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Contact Us
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <p className="m-2 mail-footer">
              <img src={mailIcon} alt="mail icon" height={15} width={16.85} />
              <a href="mailto:alokfabrications@gmail.com">
                alokfabrications@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
