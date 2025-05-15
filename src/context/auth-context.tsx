import React from "react";
import { addToast } from "@heroui/react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  verifyOtp: (email: string, otp: string) => Promise<void>;
  resetPassword: (email: string, password: string) => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

// Mock API functions
const mockLogin = async (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For testing purposes, show the valid credentials in console
      console.log("Valid login credentials: demo@example.com / password");
      
      if (email === "demo@example.com" && password === "password") {
        resolve({
          id: "user-1",
          name: "Demo User",
          email: "demo@example.com",
          role: "user",
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const user = await mockLogin(email, password);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      addToast({
        title: "Login successful",
        description: "Welcome back!",
        severity: "success",
      });
    } catch (error) {
      addToast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        severity: "danger",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        role: "user" as const,
      };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      addToast({
        title: "Signup successful",
        description: "Your account has been created",
        severity: "success",
      });
    } catch (error) {
      addToast({
        title: "Signup failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        severity: "danger",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    addToast({
      title: "Logged out",
      description: "You have been logged out successfully",
      severity: "success",
    });
  };

  const forgotPassword = async (email: string) => {
    setIsLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      addToast({
        title: "OTP sent",
        description: "Check your email for the OTP",
        severity: "success",
      });
    } catch (error) {
      addToast({
        title: "Failed to send OTP",
        description: error instanceof Error ? error.message : "Something went wrong",
        severity: "danger",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (email: string, otp: string) => {
    setIsLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (otp !== "123456") {
        throw new Error("Invalid OTP");
      }
      addToast({
        title: "OTP verified",
        description: "You can now reset your password",
        severity: "success",
      });
    } catch (error) {
      addToast({
        title: "OTP verification failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        severity: "danger",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      addToast({
        title: "Password reset successful",
        description: "You can now login with your new password",
        severity: "success",
      });
    } catch (error) {
      addToast({
        title: "Password reset failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        severity: "danger",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    forgotPassword,
    verifyOtp,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};