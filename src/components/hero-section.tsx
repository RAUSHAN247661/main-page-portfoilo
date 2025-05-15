import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium <span className="text-primary">Development</span> & Video Editing Services
            </h1>
            <p className="text-foreground-500 text-lg mb-8 max-w-lg">
              Specialized in MERN Stack Web Development, React Native App Development, and Professional Video Editing services to help you reach your business goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                as={Link}
                to="/services"
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Explore Services
              </Button>
              <Button 
                as={Link}
                to="/courses"
                variant="flat"
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:book-open" />}
              >
                Browse Courses
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://img.heroui.chat/image/avatar?w=48&h=48&u=${i}`}
                    alt={`Client ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} icon="lucide:star" className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-foreground-500">from 200+ happy clients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-xl blur-sm"></div>
              <div className="relative bg-content1 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://img.heroui.chat/image/dashboard?w=600&h=400&u=1" 
                  alt="Web Development Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-content1 p-4 rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon icon="lucide:code" className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-medium">Web Development</p>
                  <p className="text-xs text-foreground-500">MERN Stack Expert</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-6 -right-6 bg-content1 p-4 rounded-lg shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-2 rounded-full">
                  <Icon icon="lucide:smartphone" className="text-secondary text-xl" />
                </div>
                <div>
                  <p className="font-medium">App Development</p>
                  <p className="text-xs text-foreground-500">React Native</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;