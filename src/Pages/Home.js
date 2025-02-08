import React from "react";
import CustomNavbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Clients from "../Components/Clients/Clients";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <About />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
