import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import HeroSlider from "../components/Home/HeroSlider";
import AboutUs from "../components/Home/AboutUs";
import Services from "../components/Home/Services";
import OurDoctors from "../components/Common/OurDoctors";
import FeedbackSlider from "../components/Home/FeedbackSlider";
import Footer from "../components/_App/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <HeroSlider />

      <AboutUs />

      <Services />

      <FeedbackSlider />

      <OurDoctors />

      <Footer />
    </>
  );
};

export default Index;
