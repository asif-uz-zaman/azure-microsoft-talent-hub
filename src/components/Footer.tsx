import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from "lucide-react";
export const Footer = () => {
  const footerSections = [{
    title: "Services",
    links: ["Migration Services", "Implementation", "Consultancy", "Training & Workshops", "Audit & Compliance", "Ongoing Support"]
  }, {
    title: "Staffing",
    links: ["Hourly Engineers", "Monthly Contracts", "Project Teams", "Dedicated Resources", "Quality Assurance", "24/7 Support"]
  }, {
    title: "Training",
    links: ["Microsoft 365", "Azure Cloud", "Microsoft Copilot", "Custom Programs", "Certification Prep", "Workshops"]
  }, {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Contact"]
  }];
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-glow mb-4">TekWren</h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-glow" />
                <span className="text-sm text-background/80">House 12/1, Road 7, Niketon, Dhaka 1212</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-sm text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-sm text-background/80">info@tekwren.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => {})}
        </div>

        {/* Certifications & Partnerships */}
        

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © 2024 MS TechHub. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-background/70 hover:text-primary-glow transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary-glow transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary-glow transition-colors duration-200" aria-label="Website">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};