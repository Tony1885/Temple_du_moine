import { Navbar, Footer } from "@/components/layout/navigation";
import {
  HeroSection,
  HowItWorksSection,
  FeaturesSection,
  TrustBar,
  CTASection,
} from "@/components/landing/sections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <HowItWorksSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
