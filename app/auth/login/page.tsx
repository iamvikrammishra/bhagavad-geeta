"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Bot,
  Mail, 
  Loader2,
  Lock,
  Facebook,
  Chrome
} from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/';
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/';
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container max-w-lg py-12 md:py-24">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <Link href="/" className="mb-4 flex items-center gap-2 group">
            <Bot className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="font-poppins text-xl font-bold tracking-tight heading-gradient">
              Gita Guide
            </span>
          </Link>
          <h1 className="font-poppins text-3xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-muted-foreground">
            Continue your journey with the Bhagavad Gita
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="login" className="mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card className="border-2 gradient-border">
                <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                    Choose your preferred login method
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        variant="outline" 
                        className="w-full hover-card-effect"
                        onClick={() => handleSocialLogin('google')}
                      >
                        <Chrome className="mr-2 h-4 w-4" />
                        Google
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full hover-card-effect"
                        onClick={() => handleSocialLogin('facebook')}
                      >
                        <Facebook className="mr-2 h-4 w-4" />
                        Facebook
                      </Button>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <form onSubmit={handleEmailLogin}>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              type="email"
                              placeholder="name@example.com"
                              className="pl-10"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="password"
                              type="password"
                              placeholder="••••••••"
                              className="pl-10"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <Button type="submit" className="w-full hover-card-effect" disabled={isLoading}>
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Logging in...
                            </>
                          ) : (
                            "Login"
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                  <div className="text-center text-sm">
                    <Link 
                      href="/auth/forgot-password" 
                      className="text-primary hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    By continuing, you agree to our{" "}
                    <Link 
                      href="/terms" 
                      className="underline underline-offset-2 hover:text-primary"
                    >
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link 
                      href="/privacy" 
                      className="underline underline-offset-2 hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="signup">
              <Card className="border-2 gradient-border">
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>
                    Start your journey with the Bhagavad Gita
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        variant="outline"
                        className="w-full hover-card-effect"
                        onClick={() => handleSocialLogin('google')}
                      >
                        <Chrome className="mr-2 h-4 w-4" />
                        Google
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full hover-card-effect"
                        onClick={() => handleSocialLogin('facebook')}
                      >
                        <Facebook className="mr-2 h-4 w-4" />
                        Facebook
                      </Button>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="signup-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="signup-email"
                              type="email"
                              placeholder="name@example.com"
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="signup-password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="signup-password"
                              type="password"
                              placeholder="••••••••"
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <Button type="submit" className="w-full hover-card-effect">
                          Create Account
                        </Button>
                      </div>
                    </form>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                  <div className="text-center text-sm text-muted-foreground">
                    By creating an account, you agree to our{" "}
                    <Link 
                      href="/terms" 
                      className="underline underline-offset-2 hover:text-primary"
                    >
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link 
                      href="/privacy" 
                      className="underline underline-offset-2 hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}