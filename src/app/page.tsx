import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Coverage from "@/components/Coverage";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

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
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
