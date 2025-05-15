import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  price: number;
  rating: number;
  students: number;
}

interface CourseCardProps {
  course: CourseProps;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  const levelColorMap = {
    Beginner: "success",
    Intermediate: "warning",
    Advanced: "danger"
  };
  
  const categoryIconMap: Record<string, string> = {
    "Web Development": "lucide:code",
    "App Development": "lucide:smartphone",
    "Video Editing": "lucide:video",
    "MERN Stack": "lucide:layers",
    "React Native": "lucide:smartphone",
    "UI/UX Design": "lucide:pen-tool",
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
            src={course.image} 
            alt={course.title}
            className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
          />
        </CardHeader>
        <CardBody className="gap-2">
          <div className="flex justify-between items-center">
            <Chip 
              size="sm" 
              color={levelColorMap[course.level] as any} 
              variant="flat"
            >
              {course.level}
            </Chip>
            <div className="flex items-center gap-1 text-yellow-500">
              <Icon icon="lucide:star" size={16} />
              <span className="text-sm font-medium">{course.rating.toFixed(1)}</span>
              <span className="text-xs text-foreground-500">({course.students})</span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold">{course.title}</h3>
          
          <div className="flex items-center gap-2 text-foreground-500 text-sm">
            <Icon icon={categoryIconMap[course.category] || "lucide:book"} className="text-primary" />
            <span>{course.category}</span>
          </div>
          
          <div className="flex items-center gap-2 text-foreground-500 text-sm">
            <Icon icon="lucide:clock" className="text-primary" />
            <span>{course.duration}</span>
          </div>
          
          <p className="text-foreground-500 line-clamp-2 text-sm mt-1">{course.description}</p>
        </CardBody>
        <CardFooter className="flex justify-between items-center">
          <div className="font-bold text-lg">₹{course.price.toLocaleString()}</div>
          <Button 
            as={Link}
            to={`/courses/${course.id}`}
            color="primary"
            endContent={<Icon icon="lucide:arrow-right" />}
            size="sm"
          >
            View Course
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;