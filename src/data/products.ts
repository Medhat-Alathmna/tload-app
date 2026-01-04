import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Industrial Grade Sulfuric Acid",
    slug: "industrial-sulfuric-acid",
    description: "High-purity sulfuric acid for industrial applications. Our sulfuric acid meets the highest quality standards and is suitable for a wide range of industrial processes including battery manufacturing, metal processing, and chemical synthesis.",
    shortDescription: "Premium industrial chemical for manufacturing",
    price: "$299/ton",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    category: "industrial",
    specifications: {
      formula: "H2SO4",
      purity: "98%",
      packaging: "250L drums",
      casNumber: "7664-93-9"
    },
    applications: ["Battery manufacturing", "Metal processing", "Chemical synthesis"],
    inStock: true
  },
  {
    id: "2",
    name: "Pharmaceutical Grade Ethanol",
    slug: "pharmaceutical-ethanol",
    description: "Ultra-pure ethanol meeting pharmaceutical standards. Ideal for pharmaceutical manufacturing, laboratory applications, and medical device sterilization.",
    shortDescription: "Ultra-pure ethanol for pharmaceutical use",
    price: "$450/barrel",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800",
    category: "pharmaceutical",
    specifications: {
      formula: "C2H5OH",
      purity: "99.9%",
      packaging: "200L barrels",
      casNumber: "64-17-5"
    },
    applications: ["Pharmaceutical manufacturing", "Laboratory use", "Medical sterilization"],
    inStock: true
  },
  {
    id: "3",
    name: "Agricultural Fertilizer Blend",
    slug: "agricultural-fertilizer",
    description: "Specially formulated NPK fertilizer blend optimized for crop yield enhancement. Contains balanced nutrients essential for plant growth and soil health.",
    shortDescription: "Optimized NPK blend for crop enhancement",
    price: "$180/ton",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800",
    category: "agricultural",
    specifications: {
      formula: "NPK 15-15-15",
      purity: "Technical Grade",
      packaging: "50kg bags",
      casNumber: "N/A"
    },
    applications: ["Crop farming", "Horticulture", "Greenhouse cultivation"],
    inStock: true
  },
  {
    id: "4",
    name: "Specialty Polymer Resin",
    slug: "specialty-polymer-resin",
    description: "High-performance polymer resin for specialty applications. Excellent chemical resistance and thermal stability make it ideal for demanding industrial environments.",
    shortDescription: "High-performance resin for specialty uses",
    price: "$850/ton",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800",
    category: "specialty",
    specifications: {
      formula: "Proprietary",
      purity: "99.5%",
      packaging: "25kg drums",
      casNumber: "Proprietary"
    },
    applications: ["Coatings", "Adhesives", "Composite materials"],
    inStock: true
  },
  {
    id: "5",
    name: "Laboratory Grade Sodium Hydroxide",
    slug: "laboratory-sodium-hydroxide",
    description: "High-purity sodium hydroxide pellets for laboratory and industrial applications. Meets ACS specifications for analytical grade chemicals.",
    shortDescription: "ACS grade NaOH for lab applications",
    price: "$320/ton",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800",
    category: "industrial",
    specifications: {
      formula: "NaOH",
      purity: "99%",
      packaging: "25kg bags",
      casNumber: "1310-73-2"
    },
    applications: ["pH adjustment", "Chemical synthesis", "Cleaning solutions"],
    inStock: true
  },
  {
    id: "6",
    name: "Bio-Based Solvent Solution",
    slug: "bio-solvent",
    description: "Eco-friendly bio-based solvent derived from renewable sources. Perfect replacement for traditional petroleum-based solvents with excellent performance.",
    shortDescription: "Sustainable solvent from renewable sources",
    price: "$520/barrel",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800",
    category: "specialty",
    specifications: {
      formula: "Bio-based blend",
      purity: "98%",
      packaging: "200L drums",
      casNumber: "Mixture"
    },
    applications: ["Industrial cleaning", "Paint thinning", "Degreasing"],
    inStock: true
  }
];
