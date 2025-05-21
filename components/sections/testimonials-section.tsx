"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    quote: "I've always wanted to learn about the Bhagavad Gita but found books overwhelming. This app breaks it down into simple, daily lessons I can actually follow.",
    name: "Rahul Sharma",
    title: "Software Engineer",
    avatar: "RS"
  },
  {
    quote: "The Talk to Arjuna feature has helped me through some really difficult times. It's like having a wise friend who always has the right guidance.",
    name: "Claire Johnson",
    title: "Marketing Director",
    avatar: "CJ"
  },
  {
    quote: "Learning shlokas in my native language made all the difference. I finally understand the deeper meaning behind the teachings.",
    name: "Priya Patel",
    title: "Healthcare Professional",
    avatar: "PP"
  },
  {
    quote: "As someone new to Indian philosophy, the way this presents the Gita's wisdom is accessible and profound at the same time.",
    name: "Michael Chen",
    title: "Graduate Student",
    avatar: "MC"
  },
  {
    quote: "The mood-based recommendations are incredible. It's amazing how relevant the ancient wisdom is to what I'm going through today.",
    name: "Ananya Desai",
    title: "Artist",
    avatar: "AD"
  },
  {
    quote: "I listen to the audio explanations during my commute. It's the perfect way to start my day with positive energy.",
    name: "Thomas Wilson",
    title: "Business Analyst",
    avatar: "TW"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[58rem] text-center">
          <h2 className="font-poppins text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Transformed by Ancient Wisdom
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            See how people from all walks of life are finding guidance and peace through the Bhagavad Gita
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className={cn(
                "rounded-lg border bg-background p-6 shadow-sm transition-all duration-200 hover:shadow-md",
                "relative"
              )}
            >
              <QuoteIcon className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              <p className="mt-4 text-muted-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}