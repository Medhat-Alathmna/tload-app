"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";
import FadeContent from "@/components/FadeContent";

export function HeroSection() {
  return (
    <section className="relative h-hero flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 halftone-pattern halftone-large halftone-fade" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <FadeContent blur duration={0.5}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <span className="text-secondary text-sm font-medium">
                  Trusted by 500+ Industries Worldwide
                </span>
              </div>
            </FadeContent>

            {/* Headline */}
            <BlurText
              text="Powering Industries Through Smart Chemistry"
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-foreground"
              delay={50}
              animateBy="words"
            />

            {/* Subheadline */}
            <FadeContent blur duration={0.6} delay={300}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Reliable, innovative, and customized chemical solutions built for
                today&apos;s industrial challenges. From raw materials to finished
                products, we deliver excellence.
              </p>
            </FadeContent>

            {/* CTAs */}
            <FadeContent blur duration={0.6} delay={500}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan"
                >
                  <Link href="#products">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-muted"
                >
                  <Link href="#about">
                    <Play className="mr-2 h-5 w-5" />
                    See How We Work
                  </Link>
                </Button>
              </div>
            </FadeContent>

            {/* Stats */}
            <FadeContent blur duration={0.6} delay={700}>
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-secondary">20+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">500+</p>
                  <p className="text-sm text-muted-foreground">Global Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">99.8%</p>
                  <p className="text-sm text-muted-foreground">Quality Rate</p>
                </div>
              </div>
            </FadeContent>
          </div>

          {/* Right Content - Illustration */}
          <FadeContent blur duration={0.8} delay={300}>
            <div className="relative hidden lg:block">
              {/* Abstract Chemical/Industrial Illustration */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-accent/10 animate-pulse" />
                
                {/* Orbiting Elements */}
                <div className="absolute top-1/4 left-0 w-20 h-20 rounded-full bg-secondary/30 backdrop-blur-sm border border-secondary/20 flex items-center justify-center">
                  <span className="text-2xl">H2O</span>
                </div>
                <div className="absolute bottom-1/4 right-0 w-24 h-24 rounded-full bg-accent/30 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
                  <span className="text-2xl">CO2</span>
                </div>
                <div className="absolute top-0 right-1/4 w-16 h-16 rounded-full bg-muted backdrop-blur-sm border border-border flex items-center justify-center">
                  <span className="text-lg">NaCl</span>
                </div>
                
                {/* Center Element */}
                <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <div className="text-center text-secondary-foreground">
                    <p className="text-4xl font-bold">Tload</p>
                    <p className="text-sm">Chemistry</p>
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="5 5" />
                  <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-secondary/30" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
