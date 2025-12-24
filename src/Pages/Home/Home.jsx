import React from "react";
import HeroSection from "./HomeSection/HeroSection";
import ExploreRecentOpportunities from "./HomeSection/ExploreRecentOpportunities";
import FortifyYourFinancialHorizon from "./HomeSection/FortifyYourFinancialHorizon";
import SmartInvestmentSolutions from "./HomeSection/SmartInvestmentSolutions";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <ExploreRecentOpportunities />
      <FortifyYourFinancialHorizon />
      <SmartInvestmentSolutions />

    </div>
  );
};

export default Home;
