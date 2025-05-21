"use client"

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Book, MessageCircle, History, User, Menu, X, Bot } from 'lucide-react';

const navItems = [
  { label: 'Learn Shloka', href: '/learn', icon: Book },
  { label: 'Talk to Arjuna', href: '/talk', icon: MessageCircle },
  { label: 'History', href: '/history', icon: History },
  { label: 'Profile', href: '/profile', icon: User },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <Bot className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="font-poppins text-xl font-bold tracking-tight heading-gradient">Gita Guide</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`group flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-foreground/60'
                }`}
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button asChild className="hidden md:inline-flex hover:scale-105 transition-transform">
            <Link href="/auth/login">Get Started</Link>
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="md:hidden">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium transition-all hover:scale-105 ${
                    isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
            <Button asChild className="mt-2 w-full hover:scale-105 transition-transform">
              <Link href="/auth/login">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}