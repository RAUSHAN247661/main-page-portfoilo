import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-content1 border-t border-divider">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:code" className="text-primary text-2xl" />
              <span className="font-bold text-foreground text-xl">DevSkillHub</span>
            </Link>
            <p className="text-foreground-500 text-sm mb-4">
              Providing expert services in web development, app development, and video editing to help you achieve your goals.
            </p>
            <div className="flex gap-4">
              <Button isIconOnly variant="light" size="sm" aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-lg" />
              </Button>
              <Button isIconOnly variant="light" size="sm" aria-label="LinkedIn">
                <Icon icon="lucide:linkedin" className="text-lg" />
              </Button>
              <Button isIconOnly variant="light" size="sm" aria-label="GitHub">
                <Icon icon="lucide:github" className="text-lg" />
              </Button>
              <Button isIconOnly variant="light" size="sm" aria-label="YouTube">
                <Icon icon="lucide:youtube" className="text-lg" />
              </Button>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-foreground-500 hover:text-primary text-sm">Web Development</Link></li>
              <li><Link to="/services" className="text-foreground-500 hover:text-primary text-sm">App Development</Link></li>
              <li><Link to="/services" className="text-foreground-500 hover:text-primary text-sm">Video Editing</Link></li>
              <li><Link to="/services" className="text-foreground-500 hover:text-primary text-sm">Consultation</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-foreground-500 hover:text-primary text-sm">MERN Stack</Link></li>
              <li><Link to="/courses" className="text-foreground-500 hover:text-primary text-sm">React Native</Link></li>
              <li><Link to="/courses" className="text-foreground-500 hover:text-primary text-sm">Video Editing</Link></li>
              <li><Link to="/courses" className="text-foreground-500 hover:text-primary text-sm">All Courses</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground-500 text-sm">
                <Icon icon="lucide:mail" className="text-primary" />
                <span>contact@devskillhub.com</span>
              </li>
              <li className="flex items-center gap-2 text-foreground-500 text-sm">
                <Icon icon="lucide:phone" className="text-primary" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-2 text-foreground-500 text-sm">
                <Icon icon="lucide:map-pin" className="text-primary" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-divider mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-500 text-sm">
            © {new Date().getFullYear()} DevSkillHub. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-foreground-500 hover:text-primary text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-foreground-500 hover:text-primary text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;