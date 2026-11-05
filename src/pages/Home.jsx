import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Hero from "../components/home/Hero";
import IntroSection from "../components/home/IntroSection";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedVehicles from "../components/home/FeaturedVehicles";
import WhyChoose from "../components/home/WhyChoose";
import ProcessSection from "../components/home/ProcessSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import HomeContact from "../components/home/HomeContact";
import CTASection from "../components/home/CTASection";

const Home = () => {
  useDocumentTitle("Electric & Hybrid Vehicle Specialists in Kigali");

  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <FeaturedVehicles />
      <WhyChoose />
      <ProcessSection />
      <TestimonialsSection />
      <HomeContact />
      <CTASection />
    </>
  );
};

export default Home;
