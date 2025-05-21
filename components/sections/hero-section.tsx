"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const quotes = [
  "Change is the law of the universe.",
  "The mind is restless and difficult to restrain, but it is subdued by practice.",
  "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life perfectly.",
  "Man is made by his belief. As he believes, so he is.",
  "A person can rise through the efforts of his own mind.",
  "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
];

export function HeroSection() {
  const [quote, setQuote] = useState(quotes[0]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-background pt-16 pb-24 md:py-32">
      {/* Background subtle design element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-primary/5"></div>
        <div className="absolute -bottom-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-primary/5"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
              >
                Ancient Wisdom for Modern Life
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-poppins text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              >
                Discover the <span className="text-primary">Bhagavad Gita</span> in a New Way
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-4 max-w-[42rem] text-muted-foreground sm:text-xl leading-relaxed"
              >
                Learn one shloka at a time and receive personalized guidance from the timeless wisdom 
                of the Bhagavad Gita, tailored to your modern life challenges.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mx-auto lg:mx-0 flex flex-col sm:flex-row gap-4 sm:gap-3"
            >
              <Button asChild size="lg" className="font-medium">
                <Link href="/learn">Learn a Shloka</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <Link href="/talk">Talk to Arjuna</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mx-auto lg:mx-0 flex items-center justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <span className="mr-1">Available in</span>
              <span className="font-medium">English • हिन्दी • தமிழ் • + 7 more languages</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none"
          >
            <div className="relative">
              <div className={cn(
                "rounded-2xl p-6 md:p-10 bg-gradient-to-br from-amber-50 to-orange-100",
                "dark:from-amber-950/40 dark:to-orange-900/20",
                "shadow-xl border border-amber-200/50 dark:border-amber-800/30",
                "transition-all duration-1000"
              )}>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <span className="text-amber-700 dark:text-amber-300 text-sm font-medium">श्री</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-amber-800 dark:text-amber-300">Lord Krishna says</h3>
                      <p className="text-xs text-amber-700/70 dark:text-amber-400/70">Bhagavad Gita</p>
                    </div>
                  </div>
                </div>
                <blockquote className="relative z-10">
                  <div className="font-poppins text-xl md:text-2xl font-medium leading-relaxed text-amber-900 dark:text-amber-100">
                    <motion.p
                      key={quote}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    >
                      "{quote}"
                    </motion.p>
                  </div>
                </blockquote>
                <div className="absolute bottom-3 right-3 opacity-10">
                  <svg width="80" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 5C18.3431 5 17 6.34315 17 8C17 9.65685 18.3431 11 20 11V19H12V11H4V3H12C16.4183 3 20 6.58172 20 11V5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-amber-400 to-orange-300 dark:from-amber-700 dark:to-orange-600 opacity-50 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}