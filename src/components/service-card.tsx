import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "success";
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  color = "primary",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="border border-divider h-full">
        <CardBody className="gap-4">
          <div className={`bg-${color}/10 w-12 h-12 rounded-full flex items-center justify-center`}>
            <Icon icon={icon} className={`text-${color} text-2xl`} />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-foreground-500">{description}</p>
        </CardBody>
        <CardFooter>
          <Button 
            as={Link}
            to="/services"
            variant="light" 
            color={color}
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;