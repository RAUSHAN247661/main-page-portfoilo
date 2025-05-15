import React from "react";
import { motion } from "framer-motion";
import { Input, Chip, Button, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";

import CourseCard, { CourseProps } from "../../components/course-card";
import { courses, searchCourses } from "../../data/courses";

const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [filteredCourses, setFilteredCourses] = React.useState<CourseProps[]>(courses);
  
  const categories = [
    { key: "all", label: "All Courses" },
    { key: "Web Development", label: "Web Development" },
    { key: "App Development", label: "App Development" },
    { key: "Video Editing", label: "Video Editing" },
  ];

  React.useEffect(() => {
    let result = searchQuery ? searchCourses(searchQuery) : courses;
    
    if (selectedCategory !== "all") {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    setFilteredCourses(result);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (key: React.Key) => {
    setSelectedCategory(key as string);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Learn in-demand skills from industry experts and take your career to the next level.
          </p>
        </motion.div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={handleSearch}
                startContent={<Icon icon="lucide:search" className="text-foreground-500" />}
                clearable
                onClear={() => setSearchQuery("")}
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              <Tabs 
                selectedKey={selectedCategory} 
                onSelectionChange={handleCategoryChange}
                variant="light"
                color="primary"
                classNames={{
                  base: "w-full md:w-auto",
                  tabList: "gap-2",
                }}
              >
                {categories.map((category) => (
                  <Tab key={category.key} title={category.label} />
                ))}
              </Tabs>
            </div>
          </div>
        </div>
        
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Icon icon="lucide:search-x" className="text-foreground-400 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-foreground-500 mb-6">
              We couldn't find any courses matching your search criteria.
            </p>
            <Button 
              color="primary" 
              variant="flat"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;