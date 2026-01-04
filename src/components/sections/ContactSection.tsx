"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import FadeContent from "@/components/FadeContent";
import { contactInfo } from "@/data/navigation";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon. (Demo only)");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeContent blur duration={0.6}>
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mt-2 text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have questions about our products or services? We are here to help.
            </p>
          </div>
        </FadeContent>

        <div className="grid lg:grid-cols-3 gap-8">
          <FadeContent blur duration={0.6} delay={100}>
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-background border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-background border-border" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea id="message" placeholder="Tell us about your needs..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-background border-border resize-none" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </FadeContent>

          <FadeContent blur duration={0.6} delay={200}>
            <div className="space-y-6">
              <Card className="bg-card border-border hover:border-secondary/30 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <a href={"mailto:" + contactInfo.email} className="text-muted-foreground hover:text-secondary transition-colors">{contactInfo.email}</a>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:border-secondary/30 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <a href={"tel:" + contactInfo.phone} className="text-muted-foreground hover:text-secondary transition-colors">{contactInfo.phone}</a>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:border-green-500/30 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500 transition-colors">Chat with us</a>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:border-accent/30 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground text-sm">{contactInfo.address}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
