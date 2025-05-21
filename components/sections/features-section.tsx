"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  MessageSquare,
  Headphones,
  LanguagesIcon,
  Heart,
  Sparkles,
  MoonStar,
  Leaf
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Learn One Shloka at a Time",
    description: "Break down the Bhagavad Gita into easy, manageable lessons that fit your busy schedule.",
    color: "from-blue-50 to-indigo-100 dark:from-blue-950/40 dark:to-indigo-900/30",
    borderColor: "border-blue-200 dark:border-blue-800/30",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: MessageSquare,
    title: "Talk to Arjuna",
    description: "Get personalized guidance based on Bhagavad Gita teachings about your worries and challenges.",
    color: "from-amber-50 to-orange-100 dark:from-amber-950/40 dark:to-orange-900/20",
    borderColor: "border-amber-200 dark:border-amber-800/30",
    iconColor: "text-amber-600 dark:text-amber-400"
  },
  {
    icon: MoonStar,
    title: "Mood-Based Recommendations",
    description: "Find specific shlokas for how you're feeling, whether sad, angry, or seeking inspiration.",
    color: "from-purple-50 to-violet-100 dark:from-purple-950/40 dark:to-violet-900/30",
    borderColor: "border-purple-200 dark:border-purple-800/30",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: Headphones,
    title: "Audio Explanations",
    description: "Listen to shloka meanings and explanations in your preferred language and pace.",
    color: "from-green-50 to-emerald-100 dark:from-green-950/40 dark:to-emerald-900/30",
    borderColor: "border-green-200 dark:border-green-800/30",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    icon: LanguagesIcon,
    title: "Multi-Language Support",
    description: "Experience the Gita in English, Hindi, Tamil, and many more languages of your choice.",
    color: "from-red-50 to-rose-100 dark:from-red-950/40 dark:to-rose-900/30",
    borderColor: "border-red-200 dark:border-red-800/30",
    iconColor: "text-red-600 dark:text-red-400"
  },
  {
    icon: Leaf,
    title: "Ancient Stories & Wisdom",
    description: "Connect with relevant stories from ancient Indian texts that apply to modern situations.",
    color: "from-teal-50 to-cyan-100 dark:from-teal-950/40 dark:to-cyan-900/30",
    borderColor: "border-teal-200 dark:border-teal-800/30",
    iconColor: "text-teal-600 dark:text-teal-400"
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Receive content tailored to your familiarity level, preferences, and personal challenges.",
    color: "from-pink-50 to-fuchsia-100 dark:from-pink-950/40 dark:to-fuchsia-900/30",
    borderColor: "border-pink-200 dark:border-pink-800/30",
    iconColor: "text-pink-600 dark:text-pink-400"
  },
  {
    icon: Sparkles,
    title: "Visual Learning",
    description: "Engage with beautiful visualizations and animations that bring teachings to life.",
    color: "from-yellow-50 to-amber-100 dark:from-yellow-950/40 dark:to-amber-900/30",
    borderColor: "border-yellow-200 dark:border-yellow-800/30",
    iconColor: "text-yellow-600 dark:text-yellow-400"
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

export function FeaturesSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[58rem] text-center">
          <h2 className="font-poppins text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Experience the Gita in a New Light
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Our modern approach makes ancient wisdom accessible and relevant for your daily life
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={cn(
                "rounded-lg border p-6 shadow-sm transition-all duration-200 hover:shadow-md",
                `bg-gradient-to-br ${feature.color}`,
                `${feature.borderColor}`
              )}
            >
              <div className={cn(
                "rounded-full w-12 h-12 flex items-center justify-center mb-4",
                "bg-white/80 dark:bg-background/30"
              )}>
                <feature.icon className={cn("h-6 w-6", feature.iconColor)} />
              </div>
              <h3 className="font-poppins text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}