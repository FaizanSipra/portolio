import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Onyx Chauffeured",
      description: "A premium car rental website built entirely on WordPress, featuring an elegant design for a royal car rental service. Includes booking system, vehicle galleries, and responsive design for optimal user experience.",
      image: "https://images.unsplash.com/photo-1721994234246-45087e5aca16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzYyMDE4OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["WordPress", "CSS3", "JavaScript", "Responsive Design"],
      github: "#",
      demo: "https://onyxchauffeured.com.au/"
    },
    {
      title: "BazarMasiwa",
      description: "A Tanzanian e-commerce platform where users can showcase and sell products with admin approval. Features include product listings, user authentication, admin dashboard, and a complete marketplace ecosystem.",
      image: "https://images.unsplash.com/photo-1760681556225-35f9e030b6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFya2V0cGxhY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjIwNjY0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["WordPress", "CSS3", "JavaScript", "Admin System"],
      github: "#",
      demo: "https://bazarmasiwa.tenzsoft.com/"
    },
    {
      title: "Fata Plastic",
      description: "A product catalog website for a furniture business specializing in plastic and steel furniture. Features product showcases for plastic chairs, steel chairs, air coolers, and sofas with a clean, user-friendly interface.",
      image: "https://images.unsplash.com/photo-1760611656148-063d3b9a8dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBzdG9yZSUyMHNob3dyb29tfGVufDF8fHx8MTc2MjA2ODQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive Design"],
      github: "#",
      demo: "https://fataplastic.com/"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in building complete websites and collaborating on various 
            web development projects with a focus on WordPress and frontend technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle><p className='text-xl'>{project.title}</p></CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  {/* <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button> */}
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button size="sm" className="gap-2 w-full cursor-pointer">
                      <ExternalLink className="h-4 w-4 " />
                      View Live Site
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            + Collaborated on multiple other web development projects including e-commerce sites, 
            business websites, and custom WordPress solutions
          </p>
        </div>
      </div>
    </section>
  );
}