import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary text-8xl mb-6">
            <Icon icon="lucide:file-question" className="inline-block" />
          </div>
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-foreground-500 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link}
              to="/"
              color="primary"
              startContent={<Icon icon="lucide:home" />}
            >
              Go to Home
            </Button>
            <Button 
              as={Link}
              to="/contact"
              variant="flat"
              color="primary"
              startContent={<Icon icon="lucide:mail" />}
            >
              Contact Support
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;