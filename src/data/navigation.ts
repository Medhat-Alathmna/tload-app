import { NavItem, ContactInfo, SocialLink } from "@/types";

export const navigation: NavItem[] = [
  { label: "Materials", href: "#products" },
  { label: "Categories", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "#", icon: "Facebook" },
  { name: "Twitter", href: "#", icon: "Twitter" },
  { name: "LinkedIn", href: "#", icon: "Linkedin" },
  { name: "Instagram", href: "#", icon: "Instagram" }
];

export const contactInfo: ContactInfo = {
  email: "contact@tload.com",
  phone: "+1 (555) 123-4567",
  whatsapp: "https://wa.me/15551234567",
  address: "123 Chemical Drive, Industrial Park, CA 90210"
};

export const whyChooseUs = [
  {
    id: "1",
    icon: "Award",
    title: "Proven Experience",
    description: "Serving multiple industrial sectors with excellence for over 20 years."
  },
  {
    id: "2",
    icon: "Globe",
    title: "International Standards",
    description: "High-quality chemicals meeting ISO, FDA, and international certifications."
  },
  {
    id: "3",
    icon: "ShieldCheck",
    title: "Safety & Compliance",
    description: "Strict safety protocols and full regulatory compliance in all operations."
  },
  {
    id: "4",
    icon: "Truck",
    title: "Reliable Supply Chain",
    description: "Dependable logistics network ensuring on-time delivery worldwide."
  },
  {
    id: "5",
    icon: "Settings",
    title: "Customized Solutions",
    description: "Tailored chemical formulations designed for your specific needs."
  },
  {
    id: "6",
    icon: "Leaf",
    title: "Eco-Friendly Practices",
    description: "Environmentally responsible production and sustainable alternatives."
  }
];
