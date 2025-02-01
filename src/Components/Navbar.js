import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import logo from "../../src/Assets/logo.png";
import "./navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Alok Fabrications Logo"
            width="60"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="title-text fw-bold">Alok Fabrications</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
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
  );
};

export default CustomNavbar;
