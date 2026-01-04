"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import FadeContent from "@/components/FadeContent";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 halftone-pattern halftone-fade" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeContent blur duration={0.6}>
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mt-2 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our
              chemical solutions.
            </p>
          </div>
        </FadeContent>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeContent
              key={testimonial.id}
              blur
              duration={0.5}
              delay={index * 150}
            >
              <Card className="h-full bg-card border-border hover:border-secondary/30 transition-colors">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Quote className="h-5 w-5 text-secondary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground flex-grow mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
