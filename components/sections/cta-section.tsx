"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BookOpen, MessageCircle, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "rounded-2xl border overflow-hidden",
            "bg-gradient-to-br from-primary/5 via-background to-primary/5",
            "p-8 md:p-12 lg:p-16",
            "relative"
          )}
        >
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-0 left-[30%] h-[300px] w-[300px] rounded-full bg-primary/10 blur-2xl"></div>
            <div className="absolute bottom-0 right-[30%] h-[300px] w-[300px] rounded-full bg-primary/10 blur-2xl"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="font-poppins text-3xl font-bold sm:text-4xl md:text-5xl">
              Begin Your Journey with the Bhagavad Gita
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg md:text-xl">
              Experience ancient wisdom transformed for your modern life. 
              Start with just one shloka today.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 group">
                <Link href="/learn">
                  <BookOpen className="h-5 w-5" />
                  <span>Learn a Shloka</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Link href="/talk">
                  <MessageCircle className="h-5 w-5" />
                  <span>Talk to Arjuna</span>
                </Link>
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              Join thousands of others finding clarity, purpose, and peace through ancient wisdom.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}