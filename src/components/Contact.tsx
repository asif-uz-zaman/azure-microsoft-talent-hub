import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
export const Contact = () => {
  const contactInfo = [{
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email Us",
    details: ["info@mstechhub.com", "sales@mstechhub.com"],
    action: "Send Email"
  }, {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+880 1234-567890"],
    action: "Call Now"
  }, {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Our Offices",
    details: ["New York, USA", "Dhaka, Bangladesh"],
    action: "Get Directions"
  }, {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Business Hours",
    details: ["Mon-Fri: 9AM-6PM EST", "24/7 Support Available"],
    action: "Schedule Call"
  }];
  return <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-primary">Start Your Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with Microsoft technology? 
            Get in touch with our experts for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-professional transition-all duration-300 animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      {info.icon}
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {info.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-muted-foreground mb-2">
                        {detail}
                      </p>)}
                    <Button variant="outline" size="sm" className="mt-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Contact Form */}
          
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-gradient-hero text-primary-foreground text-center p-6 shadow-glow animate-scale-in">
            <h4 className="text-xl font-bold mb-2">Free Consultation</h4>
            <p className="mb-4 text-primary-foreground/90">30-minute strategy session</p>
            <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book Now
            </Button>
          </Card>

          <Card className="bg-accent text-accent-foreground text-center p-6 shadow-card animate-scale-in">
            <h4 className="text-xl font-bold mb-2">Quick Quote</h4>
            <p className="mb-4">Get pricing in 24 hours</p>
            <Button variant="outline" className="border-accent-foreground">
              Get Quote
            </Button>
          </Card>

          <Card className="bg-card text-card-foreground text-center p-6 shadow-card animate-scale-in">
            <h4 className="text-xl font-bold mb-2">Emergency Support</h4>
            <p className="mb-4 text-muted-foreground">24/7 urgent assistance</p>
            <Button>
              Call Support
            </Button>
          </Card>
        </div>
      </div>
    </section>;
};