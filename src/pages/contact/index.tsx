import React from "react";
import { motion } from "framer-motion";
import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = React.useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
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
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Have a question or want to work together? Reach out to us using the form below.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardBody className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon icon="lucide:check" className="text-primary text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-foreground-500 mb-6">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      color="primary" 
                      variant="flat"
                      onPress={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Name"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      errorMessage={errors.name}
                      startContent={<Icon icon="lucide:user" className="text-foreground-500" />}
                    />
                    
                    <Input
                      label="Email"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      errorMessage={errors.email}
                      startContent={<Icon icon="lucide:mail" className="text-foreground-500" />}
                    />
                    
                    <Input
                      label="Phone (Optional)"
                      placeholder="Enter your phone number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      startContent={<Icon icon="lucide:phone" className="text-foreground-500" />}
                    />
                    
                    <Input
                      label="Subject"
                      placeholder="Enter subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      isInvalid={!!errors.subject}
                      errorMessage={errors.subject}
                      startContent={<Icon icon="lucide:file-text" className="text-foreground-500" />}
                    />
                    
                    <Textarea
                      label="Message"
                      placeholder="Enter your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      errorMessage={errors.message}
                      minRows={5}
                    />
                    
                    <Button 
                      type="submit" 
                      color="primary" 
                      fullWidth
                      isLoading={isSubmitting}
                      endContent={!isSubmitting && <Icon icon="lucide:send" />}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-foreground-500 mb-6">
                  We'd love to hear from you. Contact us using the form or reach out directly using the information below.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:map-pin" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-foreground-500">123 Tech Park, Koramangala</p>
                      <p className="text-foreground-500">Bangalore, Karnataka 560034</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:phone" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-foreground-500">+91 9876543210</p>
                      <p className="text-foreground-500">+91 9876543211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:mail" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-foreground-500">contact@devskillhub.com</p>
                      <p className="text-foreground-500">support@devskillhub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:clock" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-foreground-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-foreground-500">Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
                <div className="flex gap-4">
                  <Button isIconOnly variant="flat" size="lg">
                    <Icon icon="lucide:facebook" className="text-xl" />
                  </Button>
                  <Button isIconOnly variant="flat" size="lg">
                    <Icon icon="lucide:twitter" className="text-xl" />
                  </Button>
                  <Button isIconOnly variant="flat" size="lg">
                    <Icon icon="lucide:instagram" className="text-xl" />
                  </Button>
                  <Button isIconOnly variant="flat" size="lg">
                    <Icon icon="lucide:linkedin" className="text-xl" />
                  </Button>
                  <Button isIconOnly variant="flat" size="lg">
                    <Icon icon="lucide:youtube" className="text-xl" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-content1 p-6 rounded-lg border border-divider">
                <h2 className="text-xl font-bold mb-4">Quick Response</h2>
                <p className="text-foreground-500 mb-2">
                  We aim to respond to all inquiries within 24 hours.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Icon icon="lucide:check-circle" />
                  <span className="font-medium">Fast response time</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;