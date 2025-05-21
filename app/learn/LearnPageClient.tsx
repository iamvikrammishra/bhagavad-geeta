"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  HeartHandshake, 
  PlayCircle, 
  SkipForward,
  Sparkles,
  Heart,
  Frown,
  Angry,
  ThumbsDown,
  User,
  Volume2,
  ArrowRight
} from 'lucide-react';
import { AnimatedGitaBook } from '@/components/animations/animated-gita-book';

const moods = [
  { icon: Frown, label: "Sad", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
  { icon: Angry, label: "Angry", color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" },
  { icon: ThumbsDown, label: "Jealous", color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" },
  { icon: User, label: "Lonely", color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300" },
  { icon: Sparkles, label: "Inspired", color: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300" },
  { icon: Heart, label: "Grateful", color: "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300" },
];

const situations = [
  "Feeling like a failure",
  "Relationship issue",
  "Work stress",
  "Financial worry",
  "Life purpose",
  "Self-doubt"
];

export default function LearnPageClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("mood");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);
  const [shlokaLoaded, setShlokaLoaded] = useState(false);
  const [audioMode, setAudioMode] = useState(false);

  const handleLearnShloka = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setShlokaLoaded(true);
    }, 3000);
  };

  const resetSelection = () => {
    setSelectedMood(null);
    setSelectedSituation(null);
    setShlokaLoaded(false);
    setAudioMode(false);
  };

  if (isLoading) {
    return (
      <div className="container max-w-6xl py-12">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <AnimatedGitaBook />
          <p className="mt-8 text-lg text-center text-muted-foreground">
            Personalizing your shloka experience...
          </p>
        </div>
      </div>
    );
  }

  if (shlokaLoaded) {
    return (
      <div className="container max-w-4xl py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant="ghost" 
            onClick={resetSelection} 
            className="mb-6"
          >
            ← Back to selection
          </Button>
          
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="flex items-center justify-between">
                <span>Bhagavad Gita - Chapter 2, Verse 47</span>
                <Button variant="ghost" size="icon" onClick={() => setAudioMode(!audioMode)}>
                  <Volume2 className="h-5 w-5" />
                </Button>
              </CardTitle>
              <CardDescription>
                Focus on actions, not results
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-4">
              <div className="mb-6 bg-muted/50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 font-poppins">Original Shloka:</h3>
                <p className="text-center font-medium italic leading-relaxed text-lg">
                  कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br />
                  मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
                </p>
                <p className="text-center mt-2 text-sm text-muted-foreground">
                  karmaṇy-evādhikāras te mā phaleṣhu kadāchana<br />
                  mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 font-poppins">Meaning:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. 
                  Never consider yourself to be the cause of the results of your activities, and never be associated with not doing your duty.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 font-poppins">Application for {selectedMood ? `feeling ${selectedMood.toLowerCase()}` : 'your situation'}:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When we feel like we're failing, we often focus too much on outcomes rather than the process. 
                  This shloka reminds us that we have control over our efforts, not the results. 
                  By focusing on doing your best in each moment without attachment to outcomes, 
                  you'll find more peace and actually perform better. Success may come, but your worth 
                  isn't determined by external achievements.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t pt-6">
              <div className="w-full flex flex-wrap gap-3">
                <Button variant="outline" className="flex-1">Practice Reading</Button>
                <Button variant="outline" className="flex-1">Share Insight</Button>
                <Button variant="outline" className="flex-1">Ask Question</Button>
              </div>
              <div className="w-full flex justify-between items-center">
                <Button variant="ghost" size="sm">
                  <HeartHandshake className="mr-2 h-4 w-4" />
                  Save for later
                </Button>
                <Button variant="ghost" size="sm">
                  Next shloka
                  <SkipForward className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl py-12">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h1 className="font-poppins text-3xl font-bold sm:text-4xl">Learn a Shloka</h1>
        <p className="mt-3 text-muted-foreground">
          Discover the perfect shloka based on your mood, situation, or continue your learning journey.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Your progress: 17 / 700 shlokas</span>
          </div>
          <Progress value={Math.min(100, (17 / 700) * 100)} className="ml-4 w-32" />
        </div>
      </div>
      
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle>Choose how to find your shloka</CardTitle>
          <CardDescription>
            Select the way you'd like to discover the next shloka for your journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="mood">By Mood</TabsTrigger>
              <TabsTrigger value="situation">By Situation</TabsTrigger>
              <TabsTrigger value="sequence">In Sequence</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mood" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {moods.map((mood) => (
                  <Button
                    key={mood.label}
                    variant="outline"
                    className={`h-auto flex-col py-4 ${selectedMood === mood.label ? 'border-2 border-primary' : ''}`}
                    onClick={() => setSelectedMood(mood.label)}
                  >
                    <div className={`rounded-full p-2 mb-2 ${mood.color}`}>
                      <mood.icon className="h-5 w-5" />
                    </div>
                    <span>{mood.label}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="situation" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {situations.map((situation) => (
                  <Button
                    key={situation}
                    variant="outline"
                    className={`justify-start ${selectedSituation === situation ? 'border-2 border-primary' : ''}`}
                    onClick={() => setSelectedSituation(situation)}
                  >
                    {situation}
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sequence" className="space-y-4">
              <div className="text-center p-8">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary/60" />
                <h3 className="text-lg font-medium mb-2">Continue Your Journey</h3>
                <p className="text-muted-foreground mb-6">
                  Your next shloka in sequence is Chapter 2, Verse 18
                </p>
                <Button onClick={handleLearnShloka} className="mx-auto">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Learn Next Shloka
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="ghost">Reset</Button>
          <Button 
            onClick={handleLearnShloka}
            disabled={!selectedMood && !selectedSituation && selectedTab !== "sequence"}
          >
            Learn Shloka
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 