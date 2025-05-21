"use client"

import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { OnboardingFlow } from '@/components/onboarding-flow';

export default function ClientThemeProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 w-full max-w-[2000px] mx-auto">{children}</main>
        <Footer />
        <OnboardingFlow />
      </div>
    </ThemeProvider>
  );
}