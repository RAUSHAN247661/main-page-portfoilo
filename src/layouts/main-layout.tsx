import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useAuth } from "../context/auth-context";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  // Check if the current route requires authentication
  const requiresAuth = location.pathname.startsWith("/courses/");
  
  React.useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {requiresAuth && !isAuthenticated ? (
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
            <p className="mb-6">Please log in to access this content.</p>
          </div>
        ) : (
          children
        )}
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout;