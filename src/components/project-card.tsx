import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const categoryColorMap: Record<string, "primary" | "secondary" | "success"> = {
    "Web Development": "primary",
    "App Development": "secondary",
    "Video Editing": "success",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader className="p-0 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
          />
        </CardHeader>
        <CardBody className="gap-2">
          <Chip 
            size="sm" 
            color={categoryColorMap[project.category] || "primary"} 
            variant="flat"
          >
            {project.category}
          </Chip>
          
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-foreground-500 text-sm">{project.description}</p>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {project.technologies.map((tech, i) => (
              <Chip key={i} size="sm" variant="flat" className="bg-content2">
                {tech}
              </Chip>
            ))}
          </div>
        </CardBody>
        <CardFooter>
          {project.link ? (
            <Button 
              as="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              variant="flat"
              endContent={<Icon icon="lucide:external-link" />}
              size="sm"
            >
              View Project
            </Button>
          ) : (
            <Button 
              color="primary"
              variant="flat"
              endContent={<Icon icon="lucide:eye" />}
              size="sm"
            >
              View Details
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;