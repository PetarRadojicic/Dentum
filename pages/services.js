import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const Services = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        bgImage="page-title-one"
      />

      <Footer />
    </>
  );
};

export default Services;
