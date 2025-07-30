import { Cloud, Users, BookOpen, ShieldCheck, MoveRight, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const Services = () => {
  const services = [{
    icon: <MoveRight className="h-12 w-12 text-primary" />,
    title: "Migration Services",
    description: "Seamless migration from legacy systems to Microsoft 365 and Azure cloud platforms with zero downtime.",
    features: ["Data Migration", "Email Migration", "Application Migration", "Infrastructure Migration"]
  }, {
    icon: <Settings className="h-12 w-12 text-primary" />,
    title: "Implementation",
    description: "Expert implementation of Microsoft solutions tailored to your business needs and requirements.",
    features: ["Custom Setup", "Integration", "Configuration", "Testing & Validation"]
  }, {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "Consultancy",
    description: "Strategic consulting to optimize your Microsoft technology stack and maximize business value.",
    features: ["Architecture Design", "Best Practices", "Performance Optimization", "Strategic Planning"]
  }, {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Training & Workshops",
    description: "Comprehensive training programs to empower your team with Microsoft technology expertise.",
    features: ["Custom Training", "Certification Prep", "Hands-on Workshops", "Ongoing Support"]
  }, {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    title: "Audit & Compliance",
    description: "Thorough auditing of your Microsoft environment to ensure security, compliance, and optimization.",
    features: ["Security Assessment", "Compliance Review", "Performance Audit", "Recommendations"]
  }, {
    icon: <Cloud className="h-12 w-12 text-primary" />,
    title: "Ongoing Support",
    description: "24/7 support and maintenance services to keep your Microsoft solutions running smoothly.",
    features: ["24/7 Monitoring", "Issue Resolution", "Updates & Patches", "Performance Tuning"]
  }];
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Expert Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Comprehensive technology solutions designed to transform your business operations and drive digital excellence across all platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-professional transition-all duration-300 hover:scale-105 animate-slide-up group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>)}
                </ul>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-16 animate-scale-in">
          <Button size="lg" className="px-8 py-4 text-lg shadow-professional hover:shadow-glow transition-all duration-300">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>;
};