import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSection from "@/components/landing/ProblemSection";
import HiddenSavings from "@/components/landing/HiddenSavings";
import VSLSection from "@/components/landing/VSLSection";
import MyStorySection from "@/components/landing/MyStorySection";
import PillarsSection from "@/components/landing/PillarsSection";
import UniqueMechanism from "@/components/landing/UniqueMechanism";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import LegacyStory from "@/components/landing/LegacyStory";
import SocialProofGrid from "@/components/landing/SocialProofGrid";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <HiddenSavings />
      <VSLSection />
      <MyStorySection />
      <PillarsSection />
      <UniqueMechanism />
      <TestimonialsSection />
      <LegacyStory />
      <SocialProofGrid />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
