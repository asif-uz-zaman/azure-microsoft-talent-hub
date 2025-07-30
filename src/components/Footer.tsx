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
              
              <a href="#" className="text-background/70 hover:text-primary-glow transition-colors duration-200" aria-label="Website">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};