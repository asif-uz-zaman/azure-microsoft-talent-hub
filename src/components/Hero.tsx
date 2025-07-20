import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Microsoft Technology Solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Microsoft Technology
            <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Excellence Delivered
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our expert Microsoft 365, Azure, and Copilot solutions. 
            From migration to implementation, staffing to training - we deliver excellence across USA and Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="px-8 py-4 text-lg shadow-glow hover:shadow-professional transition-all duration-300 hover:scale-105">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-scale-in">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-glow">500+</div>
              <div className="text-primary-foreground/80">Projects Delivered</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-glow">50+</div>
              <div className="text-primary-foreground/80">Certified Engineers</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-glow">24/7</div>
              <div className="text-primary-foreground/80">Quality Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};