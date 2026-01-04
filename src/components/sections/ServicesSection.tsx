"use client";

import {
  Factory,
  FlaskConical,
  Microscope,
  ClipboardCheck,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import FadeContent from "@/components/FadeContent";
import SpotlightCard from "@/components/SpotlightCard";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Factory,
  FlaskConical,
  Microscope,
  ClipboardCheck,
  ShieldCheck,
  Leaf,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeContent blur duration={0.6}>
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mt-2 text-foreground">
              Chemical Solutions & Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From industrial chemicals to custom formulations, we provide comprehensive
              solutions to meet your every need.
            </p>
          </div>
        </FadeContent>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Factory;
            
            return (
              <FadeContent
                key={service.id}
                blur
                duration={0.5}
                delay={index * 100}
              >
                <SpotlightCard
                  className="h-full bg-card border border-border p-6 rounded-lg"
                  spotlightColor="rgba(23, 255, 220, 0.15)"
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-secondary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </FadeContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
