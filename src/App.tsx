import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTheme } from "@heroui/use-theme";

// Layouts
import MainLayout from "./layouts/main-layout";
import AuthLayout from "./layouts/auth-layout";

// Pages
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ProjectsPage from "./pages/projects";
import CoursesPage from "./pages/courses";
import CourseDetailPage from "./pages/course-detail";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";
import ForgotPasswordPage from "./pages/auth/forgot-password";
import VerifyOtpPage from "./pages/auth/verify-otp";
import ResetPasswordPage from "./pages/auth/reset-password";
import NotFoundPage from "./pages/not-found";

// Context
import { AuthProvider } from "./context/auth-context";

function App() {
  const { theme } = useTheme();
  
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <AuthProvider>
      <Switch>
        {/* Auth Routes */}
        <Route path="/auth">
          <AuthLayout>
            <Switch>
              <Route path="/auth/login" component={LoginPage} />
              <Route path="/auth/signup" component={SignupPage} />
              <Route path="/auth/forgot-password" component={ForgotPasswordPage} />
              <Route path="/auth/verify-otp" component={VerifyOtpPage} />
              <Route path="/auth/reset-password" component={ResetPasswordPage} />
              <Redirect from="/auth" to="/auth/login" />
            </Switch>
          </AuthLayout>
        </Route>
        
        {/* Main Routes */}
        <Route path="/">
          <MainLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/services" component={ServicesPage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/courses" exact component={CoursesPage} />
              <Route path="/courses/:id" component={CourseDetailPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </AuthProvider>
  );
}

export default App;