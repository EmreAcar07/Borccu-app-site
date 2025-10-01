// import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
// import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
      <HeroSection />
      <FeaturesSection />

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <HowItWorksSection />

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <PricingSection />

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* <StatsSection /> */}
      <CTASection />

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <Footer />
    </div>
  );
}
