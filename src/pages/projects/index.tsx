import React from "react";
import { motion } from "framer-motion";
import { Button, Tabs, Tab } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import ProjectCard from "../../components/project-card";
import { projects, getProjectsByCategory } from "../../data/projects";

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  
  React.useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(getProjectsByCategory(selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (key: React.Key) => {
    setSelectedCategory(key as string);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across web development, app development, and video editing.
          </p>
        </motion.div>
        
        <div className="mb-8">
          <Tabs 
            selectedKey={selectedCategory} 
            onSelectionChange={handleCategoryChange}
            variant="light"
            color="primary"
            aria-label="Project categories"
            classNames={{
              base: "justify-center",
              tabList: "gap-2",
            }}
          >
            <Tab key="all" title="All Projects" />
            <Tab key="Web Development" title="Web Development" />
            <Tab key="App Development" title="App Development" />
            <Tab key="Video Editing" title="Video Editing" />
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Icon icon="lucide:folder-x" className="text-foreground-400 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-foreground-500 mb-6">
              We don't have any projects in this category yet.
            </p>
            <Button 
              color="primary" 
              variant="flat"
              onClick={() => setSelectedCategory("all")}
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
      
      <section className="py-16 mt-8 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Have a Project in Mind?
            </motion.h2>
            <motion.p 
              className="text-foreground-500 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's discuss how we can help you bring your ideas to life. Our team of experts is ready to tackle your next project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                as={Link}
                to="/contact"
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:send" />}
              >
                Start a Project
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;