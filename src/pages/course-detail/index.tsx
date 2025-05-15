import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Button, 
  Card, 
  CardBody, 
  Chip, 
  Divider, 
  Accordion, 
  AccordionItem,
  Tabs,
  Tab
} from "@heroui/react";
import { Icon } from "@iconify/react";

import { getCourseById, courses } from "../../data/courses";
import { useAuth } from "../../context/auth-context";

interface CourseDetailParams {
  id: string;
}

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<CourseDetailParams>();
  const { isAuthenticated } = useAuth();
  const course = getCourseById(id);
  const [selectedTab, setSelectedTab] = React.useState("overview");
  
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Button as={Link} to="/courses" color="primary">
          Browse Courses
        </Button>
      </div>
    );
  }

  const levelColorMap = {
    Beginner: "success",
    Intermediate: "warning",
    Advanced: "danger"
  };

  // Mock course curriculum
  const curriculum = [
    {
      title: "Getting Started",
      lessons: [
        { title: "Introduction to the Course", duration: "10:25" },
        { title: "Setting Up Your Development Environment", duration: "15:40" },
        { title: "Understanding the Basics", duration: "20:15" },
      ]
    },
    {
      title: "Core Concepts",
      lessons: [
        { title: "Fundamental Principles", duration: "25:10" },
        { title: "Building Your First Project", duration: "30:45" },
        { title: "Advanced Techniques", duration: "22:30" },
        { title: "Best Practices", duration: "18:15" },
      ]
    },
    {
      title: "Real-World Applications",
      lessons: [
        { title: "Case Study: E-commerce Platform", duration: "35:20" },
        { title: "Case Study: Social Media App", duration: "28:45" },
        { title: "Deployment and Scaling", duration: "24:10" },
      ]
    },
    {
      title: "Final Project",
      lessons: [
        { title: "Project Planning and Setup", duration: "15:30" },
        { title: "Implementation", duration: "45:20" },
        { title: "Testing and Debugging", duration: "20:15" },
        { title: "Deployment and Presentation", duration: "30:00" },
      ]
    },
  ];

  // Related courses
  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <Chip 
                size="sm" 
                color={levelColorMap[course.level] as any} 
                variant="flat"
                className="mb-2"
              >
                {course.level}
              </Chip>
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:users" className="text-primary" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:clock" className="text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:star" className="text-yellow-500" />
                  <span>{course.rating.toFixed(1)} rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:tag" className="text-primary" />
                  <span>{course.category}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-auto rounded-lg mb-6"
              />
            </div>
            
            <Tabs 
              selectedKey={selectedTab} 
              onSelectionChange={setSelectedTab as any}
              aria-label="Course tabs"
              variant="underlined"
              color="primary"
              className="mb-6"
            >
              <Tab key="overview" title="Overview" />
              <Tab key="curriculum" title="Curriculum" />
              <Tab key="instructor" title="Instructor" />
              <Tab key="reviews" title="Reviews" />
            </Tabs>
            
            {selectedTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">About This Course</h3>
                  <p className="text-foreground-600 mb-4">
                    {course.description}
                  </p>
                  <p className="text-foreground-600 mb-4">
                    This comprehensive course is designed to take you from the basics to advanced concepts in {course.category.toLowerCase()}. Whether you're a beginner or looking to enhance your existing skills, this course provides all the tools and knowledge you need to succeed.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Build real-world projects from scratch",
                      "Master essential concepts and techniques",
                      "Implement industry best practices",
                      "Deploy applications to production",
                      "Optimize for performance and scalability",
                      "Troubleshoot common issues",
                      "Work with the latest tools and frameworks",
                      "Prepare for job interviews and real-world scenarios"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground-600">
                    <li>Basic understanding of programming concepts</li>
                    <li>Computer with internet connection</li>
                    <li>Willingness to learn and practice</li>
                    {course.category === "Web Development" && (
                      <li>Basic knowledge of HTML, CSS, and JavaScript</li>
                    )}
                    {course.category === "App Development" && (
                      <li>Basic knowledge of JavaScript and React</li>
                    )}
                    {course.category === "Video Editing" && (
                      <li>Basic computer skills and creativity</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
            
            {selectedTab === "curriculum" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Course Curriculum</h3>
                <p className="text-foreground-500 mb-6">
                  {curriculum.reduce((total, section) => total + section.lessons.length, 0)} lessons • {course.duration} total length
                </p>
                
                <Accordion variant="splitted" selectionMode="multiple">
                  {curriculum.map((section, index) => (
                    <AccordionItem
                      key={index}
                      title={
                        <div className="flex justify-between items-center w-full">
                          <span>{section.title}</span>
                          <span className="text-foreground-500 text-sm">
                            {section.lessons.length} lessons
                          </span>
                        </div>
                      }
                      className="mb-4"
                    >
                      <div className="space-y-3 pt-2">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div 
                            key={lessonIndex}
                            className="flex justify-between items-center p-3 rounded-md bg-content2"
                          >
                            <div className="flex items-center gap-3">
                              <Icon 
                                icon={isAuthenticated ? "lucide:play-circle" : "lucide:lock"} 
                                className={isAuthenticated ? "text-primary" : "text-foreground-400"}
                              />
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-foreground-500 text-sm">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
            
            {selectedTab === "instructor" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Meet Your Instructor</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img 
                    src={`https://img.heroui.chat/image/avatar?w=200&h=200&u=99`}
                    alt="Instructor"
                    className="w-32 h-32 rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Rahul Sharma</h4>
                    <p className="text-foreground-500 mb-2">{course.category} Expert & Consultant</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:star" className="text-yellow-500" />
                        <span>4.9 Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:users" className="text-primary" />
                        <span>15,000+ Students</span>
                      </div>
                    </div>
                    <p className="text-foreground-600">
                      Rahul is a seasoned professional with over 10 years of experience in {course.category.toLowerCase()}. He has worked with numerous startups and Fortune 500 companies, helping them build scalable solutions. His teaching approach focuses on practical, real-world applications that prepare students for the industry.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {selectedTab === "reviews" && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h3 className="text-xl font-semibold">Student Reviews</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} icon="lucide:star" className="text-yellow-500" />
                      ))}
                    </div>
                    <span className="font-semibold">{course.rating.toFixed(1)}</span>
                    <span className="text-foreground-500">({course.students} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b border-divider pb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <img 
                          src={`https://img.heroui.chat/image/avatar?w=48&h=48&u=${i + 20}`}
                          alt={`Student ${i}`}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">Student Name</h4>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Icon key={star} icon="lucide:star" className="text-yellow-500 text-sm" />
                              ))}
                            </div>
                            <span className="text-foreground-500 text-sm">1 month ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground-600">
                        This course exceeded my expectations. The content is well-structured and the instructor explains complex concepts in a simple way. I've learned so much and already applied these skills in my projects.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="sticky top-24">
              <CardBody className="gap-6">
                <div className="text-3xl font-bold">₹{course.price.toLocaleString()}</div>
                
                <Button 
                  color="primary" 
                  fullWidth
                  size="lg"
                  endContent={<Icon icon="lucide:shopping-cart" />}
                >
                  {isAuthenticated ? "Enroll Now" : "Buy Now"}
                </Button>
                
                {!isAuthenticated && (
                  <Button 
                    as={Link}
                    to="/auth/login"
                    variant="flat" 
                    color="primary" 
                    fullWidth
                    endContent={<Icon icon="lucide:log-in" />}
                  >
                    Login to Enroll
                  </Button>
                )}
                
                <Divider />
                
                <div className="space-y-4">
                  <h4 className="font-semibold">This course includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:video" className="text-primary" />
                      <span>40+ hours of video content</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:file-text" className="text-primary" />
                      <span>25+ downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:infinity" className="text-primary" />
                      <span>Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:smartphone" className="text-primary" />
                      <span>Access on mobile and TV</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:award" className="text-primary" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
                
                <Divider />
                
                <div>
                  <Button 
                    variant="light" 
                    color="primary" 
                    fullWidth
                    startContent={<Icon icon="lucide:share-2" />}
                  >
                    Share Course
                  </Button>
                </div>
              </CardBody>
            </Card>
            
            {relatedCourses.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Related Courses</h3>
                <div className="space-y-4">
                  {relatedCourses.map((relatedCourse) => (
                    <Card key={relatedCourse.id} className="p-4">
                      <div className="flex gap-4">
                        <img 
                          src={relatedCourse.image} 
                          alt={relatedCourse.title}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex flex-col justify-between">
                          <div>
                            <h4 className="font-medium line-clamp-2">{relatedCourse.title}</h4>
                            <div className="flex items-center gap-1 text-sm text-foreground-500">
                              <Icon icon="lucide:star" className="text-yellow-500" size={14} />
                              <span>{relatedCourse.rating.toFixed(1)}</span>
                              <span>•</span>
                              <span>{relatedCourse.students} students</span>
                            </div>
                          </div>
                          <div className="font-semibold">₹{relatedCourse.price.toLocaleString()}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;