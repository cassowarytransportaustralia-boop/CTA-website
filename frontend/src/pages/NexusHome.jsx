import React from "react";
import Nav from "@/components/nexus/Nav";
import Hero from "@/components/nexus/Hero";
import Challenge from "@/components/nexus/Challenge";
import WhyWagga from "@/components/nexus/WhyWagga";
import Masterplan from "@/components/nexus/Masterplan";
import HowItWorks from "@/components/nexus/HowItWorks";
import Ownership from "@/components/nexus/Ownership";
import Veterans from "@/components/nexus/Veterans";
import Manufacturing from "@/components/nexus/Manufacturing";
import Revenue from "@/components/nexus/Revenue";
import Membership from "@/components/nexus/Membership";
import RoadSafety from "@/components/nexus/RoadSafety";
import Events from "@/components/nexus/Events";
import EmergencyResponse from "@/components/nexus/EmergencyResponse";
import EconomicImpact from "@/components/nexus/EconomicImpact";
import Roadmap from "@/components/nexus/Roadmap";
import NationalVision from "@/components/nexus/NationalVision";
import FinalCTA from "@/components/nexus/FinalCTA";
import Footer from "@/components/nexus/Footer";

export default function NexusHome() {
  return (
    <main data-testid="nexus-home" className="bg-white">
      <Nav />
      <Hero />
      <Challenge />
      <WhyWagga />
      <Masterplan />
      <HowItWorks />
      <Ownership />
      <Veterans />
      <Manufacturing />
      <Revenue />
      <Membership />
      <RoadSafety />
      <Events />
      <EmergencyResponse />
      <EconomicImpact />
      <Roadmap />
      <NationalVision />
      <FinalCTA />
      <Footer />
    </main>
  );
}
