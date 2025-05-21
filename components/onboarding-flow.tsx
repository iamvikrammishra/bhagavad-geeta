"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight, X, Bot } from 'lucide-react';

const steps = [
  {
    title: "Learn Bhagavad Gita one shloka at a time",
    description: "Study at your own pace with text and audio explanations tailored to your needs.",
  },
  {
    title: "Learn shloka meanings personalized for you with AI",
    description: "Get explanations that relate to your life and current situation.",
  },
  {
    title: "Talk to Arjuna and get advice based on Bhagavad Gita teachings",
    description: "Discuss your worries and receive guidance based on ancient wisdom.",
  },
  {
    title: "Tell us about yourself",
    description: "This helps us personalize your experience",
    isForm: true
  }
];

const languages = [
  "English",
  "हिन्दी (Hindi)",
  "தமிழ் (Tamil)",
  "తెలుగు (Telugu)",
  "ಕನ್ನಡ (Kannada)",
  "മലയാളം (Malayalam)",
  "ગુજરાતી (Gujarati)",
  "বাংলা (Bengali)",
  "मराठी (Marathi)",
  "ਪੰਜਾਬੀ (Punjabi)"
];

export function OnboardingFlow() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    language: "",
    country: "",
    familiarity: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Changed from 10000 to 5000 milliseconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      localStorage.setItem('userPreferences', JSON.stringify(formData));
      setIsOpen(false);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-background rounded-xl shadow-2xl border gradient-border overflow-hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-50 hover:bg-background/20"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Bot className="h-8 w-8 text-primary animate-float" />
                  <span className="font-poppins text-xl font-bold tracking-tight heading-gradient">
                    Gita Guide
                  </span>
                </div>

                <div className="relative overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    key={currentStep}
                    className="space-y-4"
                  >
                    <h2 className="font-poppins text-2xl font-bold">{steps[currentStep].title}</h2>
                    <p className="text-muted-foreground">{steps[currentStep].description}</p>

                    {steps[currentStep].isForm && (
                      <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="hover-card-effect"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="age">Age</Label>
                          <Input
                            id="age"
                            type="number"
                            placeholder="Your age"
                            value={formData.age}
                            onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                            className="hover-card-effect"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="language">Preferred Language</Label>
                          <Select
                            value={formData.language}
                            onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}
                          >
                            <SelectTrigger className="hover-card-effect">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              {languages.map((lang) => (
                                <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Familiarity with Bhagavad Gita</Label>
                          <RadioGroup
                            value={formData.familiarity}
                            onValueChange={(value) => setFormData(prev => ({ ...prev, familiarity: value }))}
                            className="bg-muted/50 p-3 rounded-lg"
                          >
                            <div className="space-y-2">
                              {[
                                { value: "never", label: "Never heard of it" },
                                { value: "heard", label: "Heard but not read" },
                                { value: "partial", label: "Partially read" },
                                { value: "full", label: "Fully read" }
                              ].map((option) => (
                                <div key={option.value} className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted transition-colors">
                                  <RadioGroupItem value={option.value} id={option.value} />
                                  <Label htmlFor={option.value}>{option.label}</Label>
                                </div>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="hover-card-effect"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNext} className="hover-card-effect">
                    {currentStep === steps.length - 1 ? "Complete" : "Next"}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-6 flex justify-center gap-1.5">
                  {steps.map((_, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        backgroundColor: index === currentStep ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.2)"
                      }}
                      className="h-1.5 w-8 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}