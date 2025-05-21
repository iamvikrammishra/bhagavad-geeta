"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, Scroll, Globe } from "lucide-react";

const historicalEvents = [
  {
    era: "Ancient Origins",
    events: [
      {
        year: "3200-3000 BCE",
        title: "The Mahabharata War",
        description: "The traditional date of the Kurukshetra war, during which the Bhagavad Gita was spoken by Lord Krishna to Arjuna.",
        icon: Users
      },
      {
        year: "3000 BCE",
        title: "Oral Tradition Begins",
        description: "The teachings of the Bhagavad Gita are preserved and transmitted through oral tradition by generations of sages.",
        icon: BookOpen
      }
    ]
  },
  {
    era: "Classical Period",
    events: [
      {
        year: "500-200 BCE",
        title: "Written Documentation",
        description: "The Bhagavad Gita is formally documented as part of the Mahabharata epic, containing 700 verses across 18 chapters.",
        icon: Scroll
      },
      {
        year: "200 BCE - 200 CE",
        title: "Philosophical Schools",
        description: "Various schools of philosophy develop different interpretations of the Gita's teachings.",
        icon: Users
      }
    ]
  },
  {
    era: "Medieval Period",
    events: [
      {
        year: "788-820 CE",
        title: "Adi Shankaracharya's Commentary",
        description: "The first major philosophical commentary on the Gita is written, establishing its importance in Vedanta philosophy.",
        icon: BookOpen
      },
      {
        year: "1017-1137 CE",
        title: "Ramanuja's Commentary",
        description: "A new interpretation of the Gita from the perspective of qualified non-dualism is presented.",
        icon: Scroll
      }
    ]
  },
  {
    era: "Modern Era",
    events: [
      {
        year: "1785 CE",
        title: "First English Translation",
        description: "Charles Wilkins produces the first English translation, introducing the Gita to the Western world.",
        icon: Globe
      },
      {
        year: "1869 CE",
        title: "Global Recognition",
        description: "The Bhagavad Gita gains international recognition through scholars and philosophers worldwide.",
        icon: Globe
      }
    ]
  }
];

const chapters = [
  { number: 1, title: "Arjuna's Dilemma", verses: 47 },
  { number: 2, title: "Transcendental Knowledge", verses: 72 },
  { number: 3, title: "Karma Yoga", verses: 43 },
  { number: 4, title: "Divine Knowledge", verses: 42 },
  { number: 5, title: "Karma-Yoga - Action in Krishna Consciousness", verses: 29 },
  { number: 6, title: "Dhyana-Yoga", verses: 47 },
  { number: 7, title: "Knowledge of the Absolute", verses: 30 },
  { number: 8, title: "Attaining the Supreme", verses: 28 },
  { number: 9, title: "The Most Confidential Knowledge", verses: 34 },
  { number: 10, title: "The Opulence of the Absolute", verses: 42 },
  { number: 11, title: "The Universal Form", verses: 55 },
  { number: 12, title: "Devotional Service", verses: 20 },
  { number: 13, title: "Nature, the Enjoyer, and Consciousness", verses: 35 },
  { number: 14, title: "The Three Modes of Material Nature", verses: 27 },
  { number: 15, title: "The Yoga of the Supreme Person", verses: 20 },
  { number: 16, title: "The Divine and Demoniac Natures", verses: 24 },
  { number: 17, title: "The Divisions of Faith", verses: 28 },
  { number: 18, title: "Conclusion - The Perfection of Renunciation", verses: 78 }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function HistoryPage() {
  return (
    <div className="container py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-poppins mb-4">The Journey of Bhagavad Gita</h1>
          <p className="text-muted-foreground text-lg">
            Explore the rich history and evolution of this timeless scripture through the ages
          </p>
        </div>

        <Tabs defaultValue="timeline" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="timeline">Historical Timeline</TabsTrigger>
            <TabsTrigger value="chapters">Chapter Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle>Historical Timeline</CardTitle>
                <CardDescription>
                  From ancient origins to modern interpretations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-8"
                  >
                    {historicalEvents.map((era, eraIndex) => (
                      <motion.div key={eraIndex} variants={item} className="space-y-6">
                        <h3 className="text-xl font-semibold text-primary">{era.era}</h3>
                        {era.events.map((event, eventIndex) => {
                          const Icon = event.icon;
                          return (
                            <div key={eventIndex} className="relative pl-8 border-l-2 border-primary/20">
                              <div className="absolute -left-3 top-0">
                                <div className="bg-background p-1.5 rounded-full border-2 border-primary">
                                  <Icon className="h-4 w-4 text-primary" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="text-sm font-medium text-muted-foreground">
                                  {event.year}
                                </div>
                                <h4 className="font-semibold">{event.title}</h4>
                                <p className="text-muted-foreground">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    ))}
                  </motion.div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chapters">
            <Card>
              <CardHeader>
                <CardTitle>Chapter Overview</CardTitle>
                <CardDescription>
                  All 18 chapters of the Bhagavad Gita with their themes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid gap-4"
                  >
                    {chapters.map((chapter, index) => (
                      <motion.div
                        key={index}
                        variants={item}
                        className="p-4 rounded-lg border hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {chapter.number}
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-medium">{chapter.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {chapter.verses} verses
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}