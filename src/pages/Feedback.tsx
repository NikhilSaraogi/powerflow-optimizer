
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { toast } from "../components/ui/use-toast";

const Feedback = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'suggestion',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, feedbackType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Form incomplete",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would call your API
      // Example: await fetch('/api/feedback', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Feedback submitted",
        description: "Thank you for your feedback. We will review it shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        feedbackType: 'suggestion',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your feedback. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex">
        <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
        
        <main 
          className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}
        >
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="bg-adani-blue text-white">
                <CardTitle>Feedback Form</CardTitle>
                <CardDescription className="text-gray-100">
                  Help us improve the HP Heater Optimization System
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email"
                      placeholder="your.email@adanipower.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Feedback Type</Label>
                    <RadioGroup 
                      value={formData.feedbackType} 
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="suggestion" id="suggestion" />
                        <Label htmlFor="suggestion">Suggestion</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="issue" id="issue" />
                        <Label htmlFor="issue">Bug/Issue</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="feature" id="feature" />
                        <Label htmlFor="feature">Feature Request</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Feedback Details <span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Please provide detailed feedback..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="resize-none"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t pt-6">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setFormData({
                      name: '',
                      email: '',
                      feedbackType: 'suggestion',
                      message: '',
                    })}
                    disabled={isSubmitting}
                  >
                    Reset
                  </Button>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-adani-green hover:bg-adani-green/90"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2 inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Feedback'
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Feedback;
