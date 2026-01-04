"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import FadeContent from "@/components/FadeContent";
import { caseStudies } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeContent blur duration={0.6}>
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mt-2 text-foreground">
              Portfolio & Case Studies
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore how we&apos;ve helped businesses across industries solve their
              chemical challenges with innovative solutions.
            </p>
          </div>
        </FadeContent>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <FadeContent
              key={study.id}
              blur
              duration={0.5}
              delay={index * 150}
            >
              <div className="group cursor-pointer relative rounded-xl overflow-hidden bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {study.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-secondary/90 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-5 w-5 text-secondary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 group-hover:text-secondary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="mt-4 flex flex-wrap gap-4">
                    {study.results.slice(0, 2).map((result, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <span className="w-2 h-2 rounded-full bg-secondary mr-2" />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
