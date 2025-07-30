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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ready to transform your business with leading technology solutions? Get in touch with our experts for a free consultation.</p>
        </div>

        <div>
          {/* Contact Information */}
          <div>
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
                    
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Contact Form */}
          
        </div>

        {/* Quick Action Cards */}
        
      </div>
    </section>;
};
