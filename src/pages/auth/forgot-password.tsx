import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/auth-context";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<{email?: string}>({});
  
  const { forgotPassword } = useAuth();
  const history = useHistory();

  const validateForm = () => {
    const newErrors: {email?: string} = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
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
      await forgotPassword(email);
      history.push("/auth/verify-otp");
    } catch (error) {
      console.error("Forgot password request failed:", error);
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
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <p className="text-foreground-500">Enter your email to reset your password</p>
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
        
        <Button 
          type="submit" 
          color="primary" 
          fullWidth
          isLoading={isLoading}
        >
          Send Reset Link
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-foreground-500">
          Remember your password?{" "}
          <Link to="/auth/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default ForgotPasswordPage;