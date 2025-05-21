"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Heart, History, Settings, Star } from "lucide-react";

export default function ProfilePage() {
  const userStats = {
    shlokas: 17,
    streak: 5,
    favorites: 8,
    conversations: 12
  };

  const recentActivity = [
    { type: 'shloka', title: 'Chapter 2, Verse 47', date: '2 hours ago' },
    { type: 'conversation', title: 'Guidance on work stress', date: '1 day ago' },
    { type: 'favorite', title: 'Chapter 3, Verse 19', date: '2 days ago' },
  ];

  return (
    <div className="container max-w-6xl py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Profile Overview */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="h-24 w-24 mx-auto mb-4">
              <AvatarFallback className="text-2xl">US</AvatarFallback>
            </Avatar>
            <CardTitle>User Name</CardTitle>
            <p className="text-sm text-muted-foreground">Member since March 2024</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="space-y-1">
                <p className="text-2xl font-bold">{userStats.shlokas}</p>
                <p className="text-sm text-muted-foreground">Shlokas</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{userStats.streak}</p>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{userStats.favorites}</p>
                <p className="text-sm text-muted-foreground">Favorites</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{userStats.conversations}</p>
                <p className="text-sm text-muted-foreground">Conversations</p>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6">
              <Settings className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="md:col-span-2">
          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] pr-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 py-3">
                        {activity.type === 'shloka' && <BookOpen className="h-5 w-5 text-primary" />}
                        {activity.type === 'conversation' && <History className="h-5 w-5 text-primary" />}
                        {activity.type === 'favorite' && <Heart className="h-5 w-5 text-primary" />}
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle>Favorite Shlokas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-lg border">
                        <Star className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="font-medium">Chapter {i + 1}, Verse {Math.floor(Math.random() * 20) + 1}</p>
                          <p className="text-sm text-muted-foreground">Saved on March {i + 1}, 2024</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="progress">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="text-sm font-medium">Chapter 1</p>
                        <p className="text-sm text-muted-foreground">5/47 verses</p>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div className="h-full w-[10%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="text-sm font-medium">Chapter 2</p>
                        <p className="text-sm text-muted-foreground">8/72 verses</p>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div className="h-full w-[11%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="text-sm font-medium">Chapter 3</p>
                        <p className="text-sm text-muted-foreground">4/43 verses</p>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div className="h-full w-[9%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}