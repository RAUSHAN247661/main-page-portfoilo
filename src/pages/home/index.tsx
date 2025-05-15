import React from "react";
import { motion } from "framer-motion";
import { Button, Divider } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import HeroSection from "../../components/hero-section";
import ServiceCard from "../../components/service-card";
import CourseCard from "../../components/course-card";
import ProjectCard from "../../components/project-card";

import { courses } from "../../data/courses";
import { projects } from "../../data/projects";

const HomePage: React.FC = () => {
  const featuredCourses = courses.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Expert Services
            </motion.h2>
            <motion.p 
              className="text-foreground-500 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive solutions to help your business grow and reach new heights.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Custom web applications built with the MERN stack (MongoDB, Express, React, Node.js) to meet your specific business needs."
              icon="lucide:code"
              color="primary"
              delay={0.1}
            />
            <ServiceCard
              title="App Development"
              description="Cross-platform mobile applications developed with React Native for both iOS and Android platforms with native performance."
              icon="lucide:smartphone"
              color="secondary"
              delay={0.2}
            />
            <ServiceCard
              title="Video Editing"
              description="Professional video editing services for promotional content, tutorials, social media, and more with cinematic quality."
              icon="lucide:video"
              color="success"
              delay={0.3}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button 
              as={Link}
              to="/services"
              color="primary"
              variant="flat"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-foreground-500">Projects Completed</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-foreground-500">Happy Clients</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-primary mb-2">5K+</h3>
              <p className="text-foreground-500">Students Enrolled</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-4xl font-bold text-primary mb-2">4.9</h3>
              <p className="text-foreground-500">Average Rating</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Featured Courses
              </motion.h2>
              <motion.p 
                className="text-foreground-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Learn in-demand skills from industry experts
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                as={Link}
                to="/courses"
                color="primary"
                variant="flat"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                View All Courses
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Recent Projects
              </motion.h2>
              <motion.p 
                className="text-foreground-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Check out some of our recent work
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                as={Link}
                to="/projects"
                color="primary"
                variant="flat"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                View All Projects
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              className="text-foreground-500 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Don't just take our word for it. Here's what our clients have to say about our services.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                className="bg-content1 p-6 rounded-lg border border-divider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} icon="lucide:star" />
                  ))}
                </div>
                <p className="text-foreground-500 mb-6">
                  "The team delivered an exceptional web application that exceeded our expectations. Their expertise in MERN stack development and attention to detail made all the difference."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={`https://img.heroui.chat/image/avatar?w=48&h=48&u=${i + 10}`}
                    alt={`Client ${i}`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-foreground-500">CEO, Tech Innovations</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Development Journey?
            </motion.h2>
            <motion.p 
              className="text-foreground-500 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's work together to build something amazing. Whether you need a custom web application, mobile app, or professional video content, we've got you covered.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
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
                Get in Touch
              </Button>
              <Button 
                as={Link}
                to="/services"
                variant="flat"
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;