import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Palette, Globe, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Core Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      icon: Globe,
      title: "Frameworks & Libraries",
      skills: ["React.js (Learning)", "Node.js (Learning)", "WordPress"]
    },
    {
      icon: Palette,
      title: "Design & Development",
      skills: ["Responsive Design", "UI/UX Implementation", "Modern Web Design"]
    },
    {
      icon: Wrench,
      title: "Additional Skills",
      skills: ["Frontend Troubleshooting", "Git", "Problem Solving", "Web Optimization"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Focused on modern frontend development with a strong foundation in core web technologies 
            and continuously expanding knowledge in React and Node.js.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}