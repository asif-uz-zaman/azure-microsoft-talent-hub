import { GraduationCap, Users, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Training = () => {
  const trainingPrograms = [
    {
      title: "Microsoft 365 Fundamentals",
      duration: "2 Days",
      format: "Virtual/On-site",
      level: "Beginner",
      description: "Complete introduction to Microsoft 365 ecosystem including Teams, SharePoint, and OneDrive.",
      topics: ["Microsoft 365 Overview", "Teams Collaboration", "SharePoint Basics", "OneDrive Management"],
      price: "$299 per person"
    },
    {
      title: "Azure Cloud Migration",
      duration: "3 Days",
      format: "Virtual/On-site",
      level: "Intermediate",
      description: "Comprehensive training on migrating workloads to Azure cloud platform safely and efficiently.",
      topics: ["Azure Fundamentals", "Migration Planning", "Security Best Practices", "Cost Optimization"],
      price: "$499 per person"
    },
    {
      title: "Microsoft Copilot Mastery",
      duration: "1 Day",
      format: "Virtual/On-site",
      level: "All Levels",
      description: "Master Microsoft Copilot across Office applications to boost productivity and efficiency.",
      topics: ["Copilot in Word", "Copilot in Excel", "Copilot in PowerPoint", "Advanced Prompting"],
      price: "$199 per person"
    },
    {
      title: "Custom Enterprise Training",
      duration: "Flexible",
      format: "On-site",
      level: "Custom",
      description: "Tailored training programs designed specifically for your organization's needs and requirements.",
      topics: ["Custom Curriculum", "Real-world Scenarios", "Hands-on Labs", "Ongoing Support"],
      price: "Contact for pricing"
    }
  ];

  const benefits = [
    { icon: <GraduationCap className="h-6 w-6" />, text: "Certified Microsoft Trainers" },
    { icon: <Users className="h-6 w-6" />, text: "Small Group Sessions (Max 12)" },
    { icon: <Calendar className="h-6 w-6" />, text: "Flexible Scheduling" },
    { icon: <Clock className="h-6 w-6" />, text: "24/7 Post-Training Support" }
  ];

  return (
    <section id="training" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="text-primary">Training Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your team with comprehensive Microsoft technology training. 
            From fundamentals to advanced topics, we deliver hands-on learning experiences.
          </p>
        </div>

        {/* Training Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary">
                {benefit.icon}
              </div>
              <span className="text-sm font-medium text-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Training Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border shadow-card hover:shadow-professional transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {program.title}
                  </CardTitle>
                  <Badge variant="outline" className="border-primary text-primary">
                    {program.level}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
                <div className="flex items-center space-x-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {program.format}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Topics Covered:</h4>
                  <ul className="space-y-1">
                    {program.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-primary">
                    {program.price}
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Book Training
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Training CTA */}
        <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 text-center animate-scale-in">
          <h3 className="text-3xl font-bold mb-4">Need Custom Training for Your Team?</h3>
          <p className="text-xl mb-8 text-primary-foreground/90">
            We create tailored training programs that align with your business objectives and team skill levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Download Training Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};