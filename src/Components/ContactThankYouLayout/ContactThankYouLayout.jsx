import React from "react";
import CustomNavbar from "../Navbar";
import Footer from "../Footer/Footer";
import ContactDetails from "../ContactDetails/ContactDetails";
import ContactDetailsThankyou from '../ContactDetailsThankyou/ContactDetailsThankyou';

const ContactThankYouLayout = () => {
  return (
    <>
      <CustomNavbar />
      <ContactDetailsThankyou />
      <Footer />
    </>
  );
};

export default ContactThankYouLayout;
