import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
