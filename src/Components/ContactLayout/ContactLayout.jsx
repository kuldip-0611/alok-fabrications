import React from "react";
import CustomNavbar from "../Navbar";
import Footer from "../Footer/Footer";
import ContactDetails from "../ContactDetails/ContactDetails";

const ContactLayout = () => {
  return (
    <>
      <CustomNavbar />
      <ContactDetails />
      <Footer />
    </>
  );
};

export default ContactLayout;
