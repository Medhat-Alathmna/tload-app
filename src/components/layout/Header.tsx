"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
              <span className="text-secondary">T</span>
              <span className="text-foreground">load</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* CTA Button - Desktop */}
            <Button
              asChild
              className="hidden md:inline-flex bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="#contact">Get Started</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <SheetTitle className="text-left mb-8">
                  <span className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                    <span className="text-secondary">T</span>
                    <span className="text-foreground">load</span>
                  </span>
                </SheetTitle>
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-secondary transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
