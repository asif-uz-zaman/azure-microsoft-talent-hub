import { Clock, Calendar, Award, Users2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Staffing = () => {
  const staffingOptions = [
    {
      icon: <Clock className="h-10 w-10 text-accent" />,
      title: "Hourly Staffing",
      description: "Flexible hourly engagement for specific tasks and short-term projects",
      features: ["On-demand expertise", "Flexible scheduling", "Pay as you use", "Quick deployment"],
      rate: "Starting at $50/hour",
      popular: false
    },
    {
      icon: <Calendar className="h-10 w-10 text-accent" />,
      title: "Monthly Contracts",
      description: "Dedicated resources for ongoing projects and long-term initiatives",
      features: ["Dedicated engineer", "Consistent availability", "Deep project knowledge", "Cost-effective"],
      rate: "Starting at $4,000/month",
      popular: true
    }
  ];

  const certifications = [
    "Microsoft Azure Solutions Architect",
    "Microsoft 365 Certified Administrator",
    "Microsoft Copilot Specialist",
    "Azure DevOps Engineer",
    "Microsoft Security Administrator",
    "Azure Data Engineer",
    "Power Platform Developer",
    "Microsoft Teams Administrator"
  ];

  return (
    <section id="staffing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Certified Engineers</span> On Demand
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our pool of Microsoft-certified engineers from Bangladesh, delivering 
            world-class expertise at competitive rates for US businesses.
          </p>
        </div>

        {/* Staffing Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {staffingOptions.map((option, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-border shadow-card hover:shadow-professional transition-all duration-300 hover:scale-105 animate-slide-up ${
                option.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground px-4 py-1">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                  {option.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {option.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {option.description}
                </CardDescription>
                <div className="text-3xl font-bold text-primary">
                  {option.rate}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${option.popular ? 'shadow-glow' : ''} transition-all duration-300`}
                  variant={option.popular ? "default" : "outline"}
                >
                  {option.popular ? 'Get Started' : 'Learn More'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Engineer Profiles */}
        <div className="bg-card rounded-xl p-8 shadow-card animate-scale-in">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <Users2 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Our Certified Engineers</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Certified Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold text-foreground mb-4">Our Engineers Hold These Certifications:</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="px-8 py-4 text-lg shadow-professional hover:shadow-glow transition-all duration-300">
              View Available Engineers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};