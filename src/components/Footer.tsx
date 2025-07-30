import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Migration Services",
        "Implementation",
        "Consultancy",
        "Training & Workshops",
        "Audit & Compliance",
        "Ongoing Support"
      ]
    },
    {
      title: "Staffing",
      links: [
        "Hourly Engineers",
        "Monthly Contracts",
        "Project Teams",
        "Dedicated Resources",
        "Quality Assurance",
        "24/7 Support"
      ]
    },
    {
      title: "Training",
      links: [
        "Microsoft 365",
        "Azure Cloud",
        "Microsoft Copilot",
        "Custom Programs",
        "Certification Prep",
        "Workshops"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Case Studies",
        "Blog",
        "Contact"
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-glow mb-4">MS TechHub</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your trusted Microsoft technology partner, delivering excellence across 
              USA and Bangladesh. From migration to implementation, staffing to training.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-glow" />
                <span className="text-sm text-background/80">New York, USA & Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-sm text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-sm text-background/80">info@mstechhub.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-background mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/70 hover:text-primary-glow transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Partnerships */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="font-semibold text-background mb-4 text-center">Microsoft Certified Partner</h4>
          <div className="flex flex-wrap justify-center items-center gap-6 text-background/60 text-sm">
            <span>✓ Microsoft Gold Partner</span>
            <span>✓ Azure Expert MSP</span>
            <span>✓ Microsoft 365 Partner</span>
            <span>✓ Security Competency</span>
            <span>✓ Modern Work Competency</span>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © 2024 MS TechHub. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-background/70 hover:text-primary-glow transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-primary-glow transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-primary-glow transition-colors duration-200"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};