import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "TenzSoft Pvt Limited",
      location: "Pakistan",
      period: "June 2024 - Present",
      description: "Working as a Frontend Developer, building responsive websites and web applications using HTML, CSS, JavaScript, and WordPress. Collaborating with team members on various client projects and handling frontend troubleshooting tasks.",
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Tailwind CSS", "Git"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Life Career Solutions",
      location: "Pakistan",
      period: "March 2024 - May 2024",
      description: "Completed a 3-month internship focused on frontend web development. Gained hands-on experience in building responsive websites, working with modern CSS frameworks, and implementing user interfaces from design mockups.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Work Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Growing experience in frontend development with a passion for creating 
            beautiful, responsive web experiences.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Education */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    F.Sc Pre-Engineering
                  </CardTitle>
                  <p className="text-primary mt-1">Intermediate Education</p>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    Pakistan
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Completed F.Sc with a focus on Pre-Engineering, building a strong foundation in 
                analytical thinking and problem-solving skills that translate well to software development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}