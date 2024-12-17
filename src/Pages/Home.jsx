// import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import AboutSection from "../Component/AboutSection";
import TransformSection from "../Component/TransformSection";
import CollaborationSection from "../Component/CollaborationSection";
import ServicesSection from "../Component/ServicesSection";
import StatsSection from "../Component/StatsSection";

import PartnershipModels from "../Component/PartnershipModels";
import IndustryVerticals from "../Component/IndustryVerticals";

import Technologies from "../Component/Technologies";
import OfficeLocations from "../Component/OfficeLocations";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <HeroSection />
      </div>
      <AboutSection></AboutSection>
      <StatsSection></StatsSection>
      <ServicesSection></ServicesSection>
      <TransformSection></TransformSection>
      <CollaborationSection></CollaborationSection>
      <PartnershipModels />
      <Technologies />
      <IndustryVerticals />
      <OfficeLocations></OfficeLocations>
      <div></div>
      <Footer className="mb-5">
        <Footer />
      </Footer>
    </div>
  );
};

export default Home;
