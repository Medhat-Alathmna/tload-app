"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import FadeContent from "@/components/FadeContent";
import { products } from "@/data/products";

export function ProductsSection() {
  return (
    <section id="products" className="py-20 relative">
      {/* Halftone Background */}
      <div className="absolute inset-0 halftone-pattern halftone-fade" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeContent blur duration={0.6}>
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mt-2 text-foreground">
              Premium Chemical Solutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality chemicals designed for
              industrial, pharmaceutical, agricultural, and specialty applications.
            </p>
          </div>
        </FadeContent>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <FadeContent
              key={product.id}
              blur
              duration={0.5}
              delay={index * 100}
            >
              <Card className="group bg-card border-border hover:border-secondary/50 transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-full bg-secondary/90 text-secondary-foreground capitalize">
                    {product.category}
                  </span>
                  
                  {/* Stock Badge */}
                  {product.inStock && (
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full bg-green-500/90 text-white">
                      In Stock
                    </span>
                  )}
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <p className="text-xl font-bold text-secondary mt-3">
                    {product.price}
                  </p>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-border hover:bg-muted hover:border-secondary"
                    onClick={() => {
                      // Visual only - no actual cart functionality
                      alert("Product added to cart! (Demo only)");
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    <Link href={`/products/${product.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeContent>
          ))}
        </div>

        {/* View All Button */}
        <FadeContent blur duration={0.5} delay={600}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              View All Products
            </Button>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
