import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Staffing } from "@/components/Staffing";
import { Training } from "@/components/Training";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Staffing />
      <Training />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
