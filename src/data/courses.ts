import { CourseProps } from "../components/course-card";

export const courses: CourseProps[] = [
  {
    id: "mern-stack-bootcamp",
    title: "MERN Stack Bootcamp: Zero to Hero",
    description: "Master MongoDB, Express.js, React, and Node.js to build full-stack web applications from scratch. Learn industry best practices and deploy real-world projects.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
    category: "Web Development",
    level: "Intermediate",
    duration: "12 weeks",
    price: 29999,
    rating: 4.8,
    students: 1250,
  },
  {
    id: "react-native-masterclass",
    title: "React Native Masterclass",
    description: "Build cross-platform mobile apps for iOS and Android using React Native. Learn to create beautiful, responsive UIs and integrate with native device features.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
    category: "App Development",
    level: "Intermediate",
    duration: "10 weeks",
    price: 24999,
    rating: 4.7,
    students: 980,
  },
  {
    id: "professional-video-editing",
    title: "Professional Video Editing with Premiere Pro",
    description: "Learn professional video editing techniques using Adobe Premiere Pro. Master color grading, transitions, effects, and create stunning videos for various platforms.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
    category: "Video Editing",
    level: "Beginner",
    duration: "8 weeks",
    price: 19999,
    rating: 4.9,
    students: 1560,
  },
  {
    id: "advanced-react-patterns",
    title: "Advanced React Patterns & Performance",
    description: "Take your React skills to the next level with advanced patterns, state management, performance optimization, and modern React features.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
    category: "Web Development",
    level: "Advanced",
    duration: "6 weeks",
    price: 15999,
    rating: 4.6,
    students: 750,
  },
  {
    id: "mongodb-expert",
    title: "MongoDB Expert: Advanced Database Design",
    description: "Master advanced MongoDB concepts including schema design, indexing, aggregation pipeline, performance optimization, and scaling strategies.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
    category: "Web Development",
    level: "Advanced",
    duration: "5 weeks",
    price: 12999,
    rating: 4.5,
    students: 620,
  },
  {
    id: "react-native-animations",
    title: "React Native Animations Masterclass",
    description: "Create stunning animations and micro-interactions in your React Native apps using Animated API, Reanimated, and Gesture Handler.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
    category: "App Development",
    level: "Advanced",
    duration: "4 weeks",
    price: 9999,
    rating: 4.8,
    students: 480,
  },
  {
    id: "video-effects-mastery",
    title: "Video Effects & VFX Mastery",
    description: "Learn to create professional visual effects, motion graphics, and compositing for your videos using After Effects and Premiere Pro.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7",
    category: "Video Editing",
    level: "Intermediate",
    duration: "7 weeks",
    price: 17999,
    rating: 4.7,
    students: 890,
  },
  {
    id: "nodejs-microservices",
    title: "Node.js Microservices Architecture",
    description: "Design, develop, and deploy scalable microservices using Node.js, Docker, and Kubernetes. Learn best practices for modern backend architecture.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8",
    category: "Web Development",
    level: "Advanced",
    duration: "8 weeks",
    price: 21999,
    rating: 4.6,
    students: 540,
  },
  {
    id: "mobile-ui-ux-design",
    title: "Mobile UI/UX Design for Developers",
    description: "Learn essential UI/UX design principles specifically for mobile app developers. Create beautiful, user-friendly interfaces for your apps.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9",
    category: "App Development",
    level: "Beginner",
    duration: "5 weeks",
    price: 14999,
    rating: 4.8,
    students: 1120,
  },
];

export const getCourseById = (id: string): CourseProps | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByCategory = (category: string): CourseProps[] => {
  return courses.filter(course => course.category === category);
};

export const searchCourses = (query: string): CourseProps[] => {
  const lowercaseQuery = query.toLowerCase();
  return courses.filter(course => 
    course.title.toLowerCase().includes(lowercaseQuery) || 
    course.description.toLowerCase().includes(lowercaseQuery) ||
    course.category.toLowerCase().includes(lowercaseQuery)
  );
};
