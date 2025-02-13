import React from "react";
import CustomNavbar from "../Navbar";
import Footer from "../Footer/Footer";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";

const ContactFormLayout = () => {
  return (
    <>
      <CustomNavbar />
      <ContactDetailsForm />
      <Footer />
    </>
  );
};

export default ContactFormLayout;
