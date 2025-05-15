import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import ThemeSwitcher from "../components/theme-switcher";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon icon="lucide:code" className="text-primary text-2xl" />
            <span className="font-bold text-foreground text-xl">DevSkillHub</span>
          </Link>
          <ThemeSwitcher />
        </div>
      </header>
      
      <div className="flex-grow flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-md">
            <CardBody className="p-6">
              {children}
            </CardBody>
          </Card>
          
          <div className="mt-6 text-center">
            <Button 
              as={Link} 
              to="/" 
              variant="light" 
              color="default" 
              startContent={<Icon icon="lucide:arrow-left" />}
            >
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;