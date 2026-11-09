import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import AboutAbrahamSection from "@/components/home/AboutAbrahamSection";
import ChallengesSection from "@/components/home/ChallengesSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Introduction Section */}
      <IntroductionSection />

      {/* 3. About Abraham Section */}
      <AboutAbrahamSection />

      {/* 4. Business Challenges Section */}
      <ChallengesSection />

      {/* 5. 8 Services Overview */}
      <ServicesSection />

      {/* 6. FAQ Section */}
      <FAQSection />

      {/* 7. Final CTA Section */}
      <FinalCTASection />
    </>
  );
}
