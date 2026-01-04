"use client";

import {
  Award,
  Globe,
  ShieldCheck,
  Truck,
  Settings,
  Leaf,
} from "lucide-react";
import FadeContent from "@/components/FadeContent";
import { whyChooseUs } from "@/data/navigation";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Globe,
  ShieldCheck,
  Truck,
  Settings,
  Leaf,
};

export function WhyChooseUsSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 halftone-pattern halftone-orange halftone-fade opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeContent blur duration={0.6}>
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Why Tload
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mt-2 text-foreground">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              With decades of experience and a commitment to excellence, we stand as
              your trusted partner in chemical solutions.
            </p>
          </div>
        </FadeContent>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;
            
            return (
              <FadeContent
                key={item.id}
                blur
                duration={0.5}
                delay={index * 100}
              >
                <div className="flex items-start space-x-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-colors">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeContent>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <FadeContent blur duration={0.6} delay={600}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-gradient">20+</p>
              <p className="text-muted-foreground mt-2">Years in Business</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-gradient">500+</p>
              <p className="text-muted-foreground mt-2">Happy Clients</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-gradient">50+</p>
              <p className="text-muted-foreground mt-2">Countries Served</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-gradient">1000+</p>
              <p className="text-muted-foreground mt-2">Products Delivered</p>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
