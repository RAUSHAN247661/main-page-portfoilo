import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Input, Button, Checkbox, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/auth-context";

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [errors, setErrors] = React.useState<{email?: string; password?: string}>({});
  
  const { login } = useAuth();
  const history = useHistory();

  const validateForm = () => {
    const newErrors: {email?: string; password?: string} = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      await login(email, password);
      history.push("/courses");
    } catch (error) {
      console.error("Login failed:", error);
      // Add specific error handling for invalid credentials
      setErrors({
        email: email === "demo@example.com" ? undefined : "Email or password is incorrect",
        password: email === "demo@example.com" ? "Password is incorrect" : undefined
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-foreground-500">Sign in to access your account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!!errors.email}
          errorMessage={errors.email}
          startContent={<Icon icon="lucide:mail" className="text-foreground-500" />}
        />
        
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
          startContent={<Icon icon="lucide:lock" className="text-foreground-500" />}
        />
        
        <div className="flex justify-between items-center">
          <Checkbox 
            isSelected={rememberMe}
            onValueChange={setRememberMe}
            size="sm"
          >
            Remember me
          </Checkbox>
          <Link 
            to="/auth/forgot-password" 
            className="text-sm text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        
        <Button 
          type="submit" 
          color="primary" 
          fullWidth
          isLoading={isLoading}
        >
          Sign In
        </Button>
        
        <Divider className="my-4">or continue with</Divider>
        
        <div className="grid grid-cols-3 gap-3">
          <Button 
            variant="flat"
            startContent={<Icon icon="logos:google-icon" />}
            className="w-full"
          >
            Google
          </Button>
          <Button 
            variant="flat"
            startContent={<Icon icon="logos:facebook" />}
            className="w-full"
          >
            Facebook
          </Button>
          <Button 
            variant="flat"
            startContent={<Icon icon="logos:github-icon" />}
            className="w-full"
          >
            GitHub
          </Button>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-foreground-500">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;