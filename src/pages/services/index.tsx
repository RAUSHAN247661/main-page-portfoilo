import React from "react";
import { motion } from "framer-motion";
import { Button, Card, CardBody, CardFooter, Divider } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      icon: "lucide:code",
      color: "primary",
      description: "Custom web applications built with the MERN stack (MongoDB, Express, React, Node.js) to meet your specific business needs.",
      features: [
        "Responsive design for all devices",
        "Custom API development",
        "Database design and optimization",
        "E-commerce functionality",
        "CMS integration",
        "Performance optimization",
        "SEO-friendly structure"
      ],
      price: "Starting at ₹50,000"
    },
    {
      id: "app-development",
      title: "App Development",
      icon: "lucide:smartphone",
      color: "secondary",
      description: "Cross-platform mobile applications developed with React Native for both iOS and Android platforms with native performance.",
      features: [
        "Cross-platform compatibility",
        "Native-like performance",
        "Offline functionality",
        "Push notifications",
        "In-app purchases",
        "User authentication",
        "Analytics integration"
      ],
      price: "Starting at ₹75,000"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      icon: "lucide:video",
      color: "success",
      description: "Professional video editing services for promotional content, tutorials, social media, and more with cinematic quality.",
      features: [
        "Color grading and correction",
        "Motion graphics and animations",
        "Sound design and mixing",
        "Visual effects",
        "Transitions and titles",
        "Format optimization for different platforms",
        "Quick turnaround time"
      ],
      price: "Starting at ₹25,000"
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We start by understanding your business, goals, and requirements through detailed discussions.",
      icon: "lucide:search"
    },
    {
      title: "Planning",
      description: "We create a comprehensive plan including timeline, milestones, and deliverables.",
      icon: "lucide:clipboard-list"
    },
    {
      title: "Design",
      description: "Our designers create wireframes and mockups for your approval before development begins.",
      icon: "lucide:pen-tool"
    },
    {
      title: "Development",
      description: "Our expert developers build your solution using the latest technologies and best practices.",
      icon: "lucide:code-2"
    },
    {
      title: "Testing",
      description: "Rigorous testing ensures your solution works flawlessly across all devices and scenarios.",
      icon: "lucide:bug"
    },
    {
      title: "Deployment",
      description: "We handle the deployment process to ensure a smooth launch of your project.",
      icon: "lucide:rocket"
    },
    {
      title: "Support",
      description: "We provide ongoing support and maintenance to keep your solution running smoothly.",
      icon: "lucide:headphones"
    }
  ];

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
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              We offer comprehensive solutions to help your business grow and reach new heights.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardBody className="gap-4">
                    <div className={`bg-${service.color}/10 w-12 h-12 rounded-full flex items-center justify-center`}>
                      <Icon icon={service.icon} className={`text-${service.color} text-2xl`} />
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="text-foreground-500">{service.description}</p>
                    <Divider className="my-2" />
                    <div>
                      <h3 className="font-semibold mb-2">Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon icon="lucide:check" className={`text-${service.color} mt-1`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <p className="font-bold text-lg">{service.price}</p>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Button 
                      as={Link}
                      to="/contact"
                      color={service.color as any}
                      fullWidth
                      endContent={<Icon icon="lucide:arrow-right" />}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              We follow a structured approach to ensure the success of your project
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.slice(0, 4).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardBody className="gap-4 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <Icon icon={step.icon} className="text-primary text-2xl" />
                    </div>
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-foreground-500">{step.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {processSteps.slice(4).map((step, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
              >
                <Card className="h-full">
                  <CardBody className="gap-4 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <Icon icon={step.icon} className="text-primary text-2xl" />
                    </div>
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto">
                      {index + 5}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-foreground-500">{step.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-min">
                    <Icon icon="lucide:award" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                    <p className="text-foreground-500">
                      Our team consists of experienced professionals with deep expertise in their respective fields.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-min">
                    <Icon icon="lucide:clock" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                    <p className="text-foreground-500">
                      We understand the importance of deadlines and ensure timely delivery of all projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-min">
                    <Icon icon="lucide:sparkles" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-foreground-500">
                      We maintain high standards of quality in all our deliverables through rigorous testing and review processes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-min">
                    <Icon icon="lucide:headphones" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-foreground-500">
                      We provide ongoing support and maintenance to ensure your solution continues to perform optimally.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-xl blur-sm"></div>
                <div className="relative bg-content1 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://img.heroui.chat/image/dashboard?w=600&h=400&u=25" 
                    alt="Team working" 
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does it take to complete a project?",
                answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. We provide detailed timelines during the planning phase."
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer flexible pricing options including fixed-price contracts, hourly rates, and retainer agreements. The cost depends on project requirements, complexity, and timeline. We provide detailed quotes after the initial consultation."
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer: "Yes, we offer various maintenance and support packages to ensure your solution continues to perform optimally. These can include regular updates, bug fixes, security patches, and feature enhancements."
              },
              {
                question: "Can you help with an existing project?",
                answer: "Absolutely! We can take over existing projects, perform code audits, implement new features, or optimize performance. We'll assess the current state and provide recommendations."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "For web development, we specialize in the MERN stack (MongoDB, Express, React, Node.js). For app development, we focus on React Native for cross-platform solutions. For video editing, we use Adobe Premiere Pro, After Effects, and DaVinci Resolve."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <Card>
                  <CardBody>
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-foreground-500">{faq.answer}</p>
                  </CardBody>
                </Card>
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
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-foreground-500 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact us today to discuss your project requirements and get a free consultation.
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
                Contact Us
              </Button>
              <Button 
                as={Link}
                to="/projects"
                variant="flat"
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                View Our Projects
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;