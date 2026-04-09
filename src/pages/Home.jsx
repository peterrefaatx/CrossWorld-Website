import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyUsSection from "../components/home/WhyUsSection";
import ProcessSection from "../components/home/ProcessSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsSection from "../components/home/NewsSection";
import CTAStrip from "../components/home/CTAStrip";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewsSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTAStrip title="مستعد للانطلاق نحو" highlight="إسبانيا؟" />
    </div>
  );
}