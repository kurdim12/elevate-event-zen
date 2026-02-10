import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { destinationCities, inquiryTypes, budgetRanges, venueStatuses, guestCountRanges } from "@/data/destinations-cities";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  destination: z.string().min(1, "Please select a destination"),
  city: z.string().optional(),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  budgetRange: z.string().optional(),
  venueStatus: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  notes: z.string().max(2000, "Notes must be under 2000 characters").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cities = useMemo(() => {
    if (!formData.destination) return [];
    const destData = destinationCities.find(d => d.destination === formData.destination);
    return destData?.cities || [];
  }, [formData.destination]);

  const isCorporate = formData.inquiryType === "Corporate Events";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission - in production, this would send to your backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request submitted",
      description: "We'll respond with a clear next step within 24 hours.",
    });
    
    setFormData({});
    setIsSubmitting(false);
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
    // Reset city when destination changes
    if (field === "destination") {
      setFormData(prev => ({ ...prev, city: undefined }));
    }
  };

  return (
    <Layout>
      <SEO 
        title="Contact MaraNasi | Event Planner Jordan Amman"
        description="Contact MaraNasi to request a proposal for corporate events, destination weddings, and proposals in Jordan and Amman. Also serving Saudi Arabia, Dubai, Doha, Egypt, UAE, Thailand, India, Vietnam, China, United States, and Canada."
        keywords="contact event planner Jordan, contact event planner Amman, request proposal Jordan, wedding planner contact Amman, corporate event inquiry Jordan, event planner Jordan Amman, contact event planner Saudi Arabia Dubai, event planner New Jersey Chicago Houston Texas California Boston Los Angeles Toronto Canada"
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ivory-dark">
        <div className="container-wide">
          <AnimatedSection>
            <h1 className="heading-display max-w-4xl">
              Request a Proposal
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-8">
              <AnimatedSection>
                <p className="body-lg mb-10">
                  Share the essentials. We'll respond with a clear next step.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Inquiry Type & Destination */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select value={formData.inquiryType} onValueChange={(v) => updateField("inquiryType", v)}>
                        <SelectTrigger className={errors.inquiryType ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          {inquiryTypes.map(type => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.inquiryType && <p className="text-sm text-destructive">{errors.inquiryType}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination *</Label>
                      <Select value={formData.destination} onValueChange={(v) => updateField("destination", v)}>
                        <SelectTrigger className={errors.destination ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          {destinationCities.map(dest => (
                            <SelectItem key={dest.destination} value={dest.destination}>{dest.destination}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.destination && <p className="text-sm text-destructive">{errors.destination}</p>}
                    </div>
                  </div>

                  {/* City (dynamic based on destination) */}
                  {cities.length > 0 && (
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Select value={formData.city} onValueChange={(v) => updateField("city", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select city (optional)" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          {cities.map(city => (
                            <SelectItem key={city} value={city}>{city}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Event Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date or Date Range</Label>
                      <Input 
                        type="text" 
                        placeholder="e.g., March 2025 or March 15-18, 2025"
                        value={formData.eventDate || ""}
                        onChange={(e) => updateField("eventDate", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Guest Count</Label>
                      <Select value={formData.guestCount} onValueChange={(v) => updateField("guestCount", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select guest count" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          {guestCountRanges.map(range => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget Range</Label>
                      <Select value={formData.budgetRange} onValueChange={(v) => updateField("budgetRange", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          {budgetRanges.map(range => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="venueStatus">Venue Status</Label>
                      <Select value={formData.venueStatus} onValueChange={(v) => updateField("venueStatus", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select venue status" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          {venueStatuses.map(status => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="pt-4 border-t border-border">
                    <h3 className="heading-sm mb-6">Your Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input 
                          type="text"
                          placeholder="Your full name"
                          value={formData.name || ""}
                          onChange={(e) => updateField("name", e.target.value)}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email || ""}
                          onChange={(e) => updateField("email", e.target.value)}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone / WhatsApp</Label>
                        <Input 
                          type="tel"
                          placeholder="+962 xxx xxx xxx"
                          value={formData.phone || ""}
                          onChange={(e) => updateField("phone", e.target.value)}
                        />
                      </div>

                      {isCorporate && (
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input 
                            type="text"
                            placeholder="Your company name"
                            value={formData.companyName || ""}
                            onChange={(e) => updateField("companyName", e.target.value)}
                          />
                        </div>
                      )}
                    </div>

                    <div className="mt-6 space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea 
                        placeholder="Tell us more about your event vision, specific requirements, or any questions..."
                        rows={5}
                        value={formData.notes || ""}
                        onChange={(e) => updateField("notes", e.target.value)}
                        className={errors.notes ? "border-destructive" : ""}
                      />
                      {errors.notes && <p className="text-sm text-destructive">{errors.notes}</p>}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <AnimatedSection delay={100}>
                <div className="card-luxury sticky top-32">
                  <h3 className="heading-sm mb-6">Other Ways to Reach Us</h3>
                  
                  <div className="space-y-6">
                    <a 
                      href="tel:+962796565971" 
                      className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+962 79 656 5971</span>
                    </a>
                    
                    <a 
                      href="mailto:hello@maranasi.com" 
                      className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <span>hello@maranasi.com</span>
                    </a>
                    
                    <a 
                      href="https://wa.me/962796565971" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Prefer to schedule a call? We're happy to discuss your 
                      requirements in detail.
                    </p>
                    <a 
                      href="https://calendly.com/maranasi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline w-full mt-4 text-center"
                    >
                      Book a Call
                    </a>
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
