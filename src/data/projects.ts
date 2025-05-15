import { ProjectProps } from "../components/project-card";

export const projects: ProjectProps[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart, checkout, and admin dashboard.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    link: "https://example.com/ecommerce"
  },
  {
    id: "fitness-tracker-app",
    title: "Fitness Tracker App",
    description: "Mobile app for tracking workouts, nutrition, and progress with personalized recommendations.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=11",
    category: "App Development",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    link: "https://example.com/fitness-app"
  },
  {
    id: "corporate-promo-video",
    title: "Corporate Promo Video",
    description: "Professional promotional video for a tech startup showcasing their products and services.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=12",
    category: "Video Editing",
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    description: "Property listing and management platform with virtual tours and agent dashboard.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=13",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Three.js"],
    link: "https://example.com/real-estate"
  },
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    description: "Mobile app for ordering food from local restaurants with real-time order tracking.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=14",
    category: "App Development",
    technologies: ["React Native", "Firebase", "Google Maps API", "Stripe"],
    link: "https://example.com/food-app"
  },
  {
    id: "travel-vlog-series",
    title: "Travel Vlog Series",
    description: "Series of travel vlogs with cinematic editing, color grading, and storytelling.",
    image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=15",
    category: "Video Editing",
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
  }
];

export const getProjectById = (id: string): ProjectProps | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): ProjectProps[] => {
  return projects.filter(project => project.category === category);
};
