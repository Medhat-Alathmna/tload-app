import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { navigation, contactInfo } from "@/data/navigation";

const socialIcons = {
  Facebook: Facebook,
  Twitter: Twitter,
  Linkedin: Linkedin,
  Instagram: Instagram,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                <span className="text-secondary">T</span>
                <span className="text-foreground">load</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Innovative Chemistry. Trusted Results. Delivering premium chemical
              solutions for industries worldwide since 2005.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {Object.entries(socialIcons).map(([name, Icon]) => (
                <Link
                  key={name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-secondary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-secondary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="text-sm">{contactInfo.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Tload. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Innovative Chemistry. Trusted Results.
          </p>
        </div>
      </div>
    </footer>
  );
}
