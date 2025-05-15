import React from "react";
import { motion } from "framer-motion";
import { Button, Divider } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const AboutPage: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">About DevSkillHub</h1>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              We are a team of passionate developers and educators dedicated to helping individuals and businesses achieve their goals through technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-foreground-600 mb-4">
                At DevSkillHub, our mission is to empower individuals and businesses to harness the power of technology to achieve their goals. We believe that with the right skills and tools, anyone can build amazing digital products and services.
              </p>
              <p className="text-foreground-600 mb-4">
                Our goal is to provide expert services and comprehensive education in web development, app development, and video editing to help businesses grow and succeed in the digital landscape.
              </p>
              <div className="flex gap-4 mt-6">
                <Button 
                  as={Link}
                  to="/services"
                  color="primary"
                  endContent={<Icon icon="lucide:arrow-right" />}
                >
                  Our Services
                </Button>
                <Button 
                  as={Link}
                  to="/courses"
                  variant="flat"
                  color="primary"
                  endContent={<Icon icon="lucide:book-open" />}
                >
                  Browse Courses
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-xl blur-sm"></div>
                <div className="relative bg-content1 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://img.heroui.chat/image/dashboard?w=600&h=400&u=20" 
                    alt="Our Team" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in the industry
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2018",
                title: "Founded",
                description: "Started as a freelance web development service with a focus on quality and client satisfaction."
              },
              {
                year: "2019",
                title: "Expanded Services",
                description: "Added app development and video editing services to meet growing client demands."
              },
              {
                year: "2021",
                title: "Launched Courses",
                description: "Started offering online courses to share our expertise with aspiring developers and creators."
              },
              {
                year: "2023",
                title: "Growing Team",
                description: "Expanded our team of experts to better serve our clients and students worldwide."
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-content1 p-6 rounded-lg border border-divider h-full">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-foreground-500">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Meet the experts behind DevSkillHub
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Founder & Lead Developer",
                image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=30",
                description: "Full-stack developer with 10+ years of experience in MERN stack and React Native."
              },
              {
                name: "Priya Patel",
                role: "Lead App Developer",
                image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=31",
                description: "React Native expert with a passion for creating beautiful, user-friendly mobile applications."
              },
              {
                name: "Amit Kumar",
                role: "Senior Video Editor",
                image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=32",
                description: "Professional video editor with expertise in Adobe Premiere Pro, After Effects, and DaVinci Resolve."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-content1 rounded-lg overflow-hidden border border-divider">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-foreground-500">{member.description}</p>
                    <div className="flex gap-2 mt-4">
                      <Button isIconOnly variant="light" size="sm">
                        <Icon icon="lucide:linkedin" />
                      </Button>
                      <Button isIconOnly variant="light" size="sm">
                        <Icon icon="lucide:twitter" />
                      </Button>
                      <Button isIconOnly variant="light" size="sm">
                        <Icon icon="lucide:github" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "lucide:star",
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code quality to customer service."
              },
              {
                icon: "lucide:lightbulb",
                title: "Innovation",
                description: "We embrace new technologies and approaches to solve complex problems."
              },
              {
                icon: "lucide:users",
                title: "Collaboration",
                description: "We believe in the power of teamwork and collaborative problem-solving."
              },
              {
                icon: "lucide:heart",
                title: "Passion",
                description: "We are passionate about technology and helping others succeed."
              },
              {
                icon: "lucide:book-open",
                title: "Continuous Learning",
                description: "We are committed to continuous learning and improvement."
              },
              {
                icon: "lucide:shield",
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical standards."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-content1 p-6 rounded-lg border border-divider h-full">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon icon={value.icon} className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground-500">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
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
              Ready to Work With Us?
            </motion.h2>
            <motion.p 
              className="text-foreground-500 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's collaborate to bring your ideas to life and help you achieve your business goals.
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

export default AboutPage;