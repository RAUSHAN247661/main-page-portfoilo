import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Input, Button, Checkbox, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/auth-context";

const SignupPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [agreeToTerms, setAgreeToTerms] = React.useState(false);
  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});
  
  const { signup } = useAuth();
  const history = useHistory();

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      terms?: string;
    } = {};
    
    if (!name) {
      newErrors.name = "Name is required";
    }
    
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
    
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the terms and conditions";
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
      await signup(name, email, password);
      history.push("/courses");
    } catch (error) {
      console.error("Signup failed:", error);
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
        <h1 className="text-2xl font-bold">Create an Account</h1>
        <p className="text-foreground-500">Join our community of learners</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={!!errors.name}
          errorMessage={errors.name}
          startContent={<Icon icon="lucide:user" className="text-foreground-500" />}
        />
        
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
          placeholder="Create a password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
          startContent={<Icon icon="lucide:lock" className="text-foreground-500" />}
        />
        
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          isInvalid={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
          startContent={<Icon icon="lucide:lock" className="text-foreground-500" />}
        />
        
        <div>
          <Checkbox 
            isSelected={agreeToTerms}
            onValueChange={setAgreeToTerms}
            size="sm"
            isInvalid={!!errors.terms}
          >
            I agree to the{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </Checkbox>
          {errors.terms && (
            <p className="text-danger text-xs mt-1">{errors.terms}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          color="primary" 
          fullWidth
          isLoading={isLoading}
        >
          Sign Up
        </Button>
        
        <Divider className="my-4">or sign up with</Divider>
        
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
          Already have an account?{" "}
          <Link to="/auth/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignupPage;