import React from "react";
import { useHistory } from "react-router-dom";
import { Button, InputOtp } from "@heroui/react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/auth-context";

const VerifyOtpPage: React.FC = () => {
  const [otp, setOtp] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  
  const { verifyOtp } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    
    setIsLoading(true);
    
    try {
      await verifyOtp("demo@example.com", otp);
      history.push("/auth/reset-password");
    } catch (error) {
      setError("Invalid OTP. Please try again.");
      console.error("OTP verification failed:", error);
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
        <h1 className="text-2xl font-bold">Verify OTP</h1>
        <p className="text-foreground-500">Enter the 6-digit code sent to your email</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center gap-2">
          <InputOtp
            value={otp}
            onChange={setOtp}
            size="lg"
            length={6}
            classNames={{
              input: "text-center",
            }}
          />
          {error && <p className="text-danger text-sm">{error}</p>}
        </div>
        
        <Button 
          type="submit" 
          color="primary" 
          fullWidth
          isLoading={isLoading}
        >
          Verify OTP
        </Button>
        
        <div className="text-center">
          <Button 
            variant="light" 
            color="primary"
            onPress={() => {
              // Resend OTP logic
            }}
          >
            Resend OTP
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default VerifyOtpPage;