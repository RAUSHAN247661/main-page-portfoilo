import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/auth-context";

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<{
    password?: string;
    confirmPassword?: string;
  }>({});
  
  const { resetPassword } = useAuth();
  const history = useHistory();

  const validateForm = () => {
    const newErrors: {
      password?: string;
      confirmPassword?: string;
    } = {};
    
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
      await resetPassword("demo@example.com", password);
      history.push("/auth/login");
    } catch (error) {
      console.error("Password reset failed:", error);
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
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-foreground-500">Create a new password for your account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="New Password"
          placeholder="Enter new password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
          startContent={<Icon icon="lucide:lock" className="text-foreground-500" />}
        />
        
        <Input
          label="Confirm Password"
          placeholder="Confirm new password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          isInvalid={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
          startContent={<Icon icon="lucide:lock" className="text-foreground-500" />}
        />
        
        <Button 
          type="submit" 
          color="primary" 
          fullWidth
          isLoading={isLoading}
        >
          Reset Password
        </Button>
      </form>
    </motion.div>
  );
};

export default ResetPasswordPage;