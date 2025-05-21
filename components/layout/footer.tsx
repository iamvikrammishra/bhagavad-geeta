"use client"

import Link from 'next/link';
import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Bot className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
              <span className="font-poppins text-xl font-bold tracking-tight heading-gradient">Gita Guide</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Ancient wisdom for modern times. Experience the Bhagavad Gita in a simple, 
              personalized way designed for today's world.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-medium">Learn</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/learn" className="text-muted-foreground hover:text-primary transition-colors">Daily Shloka</Link></li>
              <li><Link href="/learn/chapters" className="text-muted-foreground hover:text-primary transition-colors">Chapters</Link></li>
              <li><Link href="/learn/moods" className="text-muted-foreground hover:text-primary transition-colors">Mood Based</Link></li>
              <li><Link href="/learn/audio" className="text-muted-foreground hover:text-primary transition-colors">Audio Lessons</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium">Guide</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/talk" className="text-muted-foreground hover:text-primary transition-colors">Talk to Arjuna</Link></li>
              <li><Link href="/talk/situations" className="text-muted-foreground hover:text-primary transition-colors">Common Situations</Link></li>
              <li><Link href="/talk/practices" className="text-muted-foreground hover:text-primary transition-colors">Daily Practices</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium">Account</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/profile" className="text-muted-foreground hover:text-primary transition-colors">Profile</Link></li>
              <li><Link href="/history" className="text-muted-foreground hover:text-primary transition-colors">History</Link></li>
              <li><Link href="/auth/login" className="text-muted-foreground hover:text-primary transition-colors">Login</Link></li>
              <li><Link href="/auth/signup" className="text-muted-foreground hover:text-primary transition-colors">Sign Up</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gita Guide. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}