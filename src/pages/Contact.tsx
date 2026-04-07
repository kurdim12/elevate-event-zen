import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().max(30).optional(),
  eventType: z.string().min(1, "Select event type"),
  guestCount: z.string().min(1, "Select guest count"),
  eventDate: z.string().max(100).optional(),
  message: z.string().trim().max(2000).optional(),
});

type FormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Inquiry Submitted", description: "We'll respond within 24 hours." });
    setFormData({});
    setIsSubmitting(false);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <Layout>
      <SEO
        title="Contact Maranasi | Request a Luxury Event Proposal | Jordan"
        description="Get in touch with Maranasi — Jordan's premier luxury event planning company. Submit your inquiry and we'll respond within 24 hours."
        keywords="contact event planner Jordan, contact Maranasi, luxury event proposal Jordan, wedding planner contact Amman"
        canonicalPath="/contact"
        breadcrumbs={[
          { name: "Home", url: "https://maranasi.com" },
          { name: "Contact", url: "https://maranasi.com/contact" },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <AnimatedSection>
            <p className="section-label mb-4">Get in Touch</p>
            <h1 className="heading-display max-w-3xl">
              Let's Begin Creating Your Event
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name || ""}
                        onChange={(e) => updateField("name", e.target.value)}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email || ""}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Phone / WhatsApp</Label>
                      <Input
                        placeholder="+962 xxx xxx xxx"
                        value={formData.phone || ""}
                        onChange={(e) => updateField("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Event Type *</Label>
                      <Select value={formData.eventType} onValueChange={(v) => updateField("eventType", v)}>
                        <SelectTrigger className={errors.eventType ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent className="bg-card">
                          {["Wedding", "Gala Dinner", "Corporate Event", "Exhibition", "Other"].map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.eventType && <p className="text-xs text-destructive">{errors.eventType}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Estimated Guest Count *</Label>
                      <Select value={formData.guestCount} onValueChange={(v) => updateField("guestCount", v)}>
                        <SelectTrigger className={errors.guestCount ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select guest count" />
                        </SelectTrigger>
                        <SelectContent className="bg-card">
                          {["Under 50", "50–150", "150–500", "500–1,000", "1,000+"].map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.guestCount && <p className="text-xs text-destructive">{errors.guestCount}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Event Date / Timeframe</Label>
                      <Input
                        placeholder="e.g., March 2026"
                        value={formData.eventDate || ""}
                        onChange={(e) => updateField("eventDate", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Message / Vision</Label>
                    <Textarea
                      placeholder="Tell us about your event vision..."
                      rows={5}
                      value={formData.message || ""}
                      onChange={(e) => updateField("message", e.target.value)}
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <AnimatedSection delay={100}>
                <div className="bg-card p-8 sticky top-32 space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground">Abu Hudayb St, Amman, Jordan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <a href="tel:+962775240000" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +962 77 524 0000
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <a href="mailto:gm@maranasi.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      gm@maranasi.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">Sunday–Thursday, 9:00–18:30</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
