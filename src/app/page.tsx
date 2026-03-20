import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Footer from "@/components/Footer";

// Lazy load heavy interactive components to achieve 100/100 Core Web Vitals
const Products = dynamic(() => import("@/components/Products"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const Coverage = dynamic(() => import("@/components/Coverage"));
const OnboardingForm = dynamic(() => import("@/components/OnboardingForm"));
const CTAFinal = dynamic(() => import("@/components/CTAFinal"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Products />
        <WhyUs />
        <Coverage />
        <OnboardingForm />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
