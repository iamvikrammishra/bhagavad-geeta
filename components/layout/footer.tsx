"use client"

import Link from 'next/link';
import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8 sm:py-10">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-primary transition-transform group-hover:scale-110" />
              <span className="font-poppins text-lg sm:text-xl font-bold tracking-tight heading-gradient">Gita Guide</span>
            </Link>
            <p className="mt-3 sm:mt-4 text-sm text-muted-foreground max-w-md">
              Ancient wisdom for modern times. Experience the Bhagavad Gita in a simple, 
              personalized way designed for today's world.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm sm:text-base font-semibold">Learn</h3>
            <ul className="mt-3 space-y-2.5">
              <li>
                <Link 
                  href="/learn" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Daily Shloka
                </Link>
              </li>
              <li>
                <Link 
                  href="/learn/chapters" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Chapters
                </Link>
              </li>
              <li>
                <Link 
                  href="/learn/moods" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Mood Based
                </Link>
              </li>
              <li>
                <Link 
                  href="/learn/audio" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Audio Lessons
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm sm:text-base font-semibold">Guide</h3>
            <ul className="mt-3 space-y-2.5">
              <li>
                <Link 
                  href="/talk" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Talk to Arjuna
                </Link>
              </li>
              <li>
                <Link 
                  href="/talk/situations" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Common Situations
                </Link>
              </li>
              <li>
                <Link 
                  href="/talk/practices" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Daily Practices
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="text-sm sm:text-base font-semibold">Account</h3>
            <ul className="mt-3 space-y-2.5">
              <li>
                <Link 
                  href="/profile" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  href="/history" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  History
                </Link>
              </li>
              <li>
                <Link 
                  href="/auth/login" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  href="/auth/signup" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Gita Guide. All rights reserved.
          </p>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}