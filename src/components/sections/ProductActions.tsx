"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductActions() {
  return (
    <div className="flex gap-4">
      <Button
        size="lg"
        className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
        onClick={() => alert("Added to cart! (Demo only)")}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Add to Cart
      </Button>
      <Button size="lg" variant="outline" className="border-border hover:bg-muted">
        Request Quote
      </Button>
    </div>
  );
}
