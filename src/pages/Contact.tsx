import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Thank you for your inquiry. We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl">
            <p className="label-uppercase mb-4">Get in Touch</p>
            <h1 className="heading-display mb-6">
              Let's Create
              <br />
              <span className="italic">Together</span>
            </h1>
            <p className="body-lg">
              Ready to begin planning your event? We'd love to hear from you. 
              Share your vision and we'll be in touch within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding-sm bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-transparent border-border focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-transparent border-border focus:border-primary"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-transparent border-border focus:border-primary"
                        placeholder="+962 7X XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                        Event Type *
                      </label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                      >
                        <SelectTrigger className="bg-transparent border-border focus:border-primary">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="brand">Brand Activation</SelectItem>
                          <SelectItem value="private">Private Event</SelectItem>
                          <SelectItem value="destination">Destination Experience</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell Us About Your Event *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-transparent border-border focus:border-primary resize-none"
                      placeholder="Share your vision, approximate date, guest count, and any other details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={200}>
                <div className="card-luxury">
                  <h3 className="heading-sm mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Office Location</p>
                        <p className="text-muted-foreground font-light">
                          Amman, Jordan
                          <br />
                          Al-Shmeisani District
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a 
                          href="mailto:info@maranasi.com" 
                          className="text-muted-foreground font-light hover:text-primary transition-colors"
                        >
                          info@maranasi.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <a 
                          href="tel:+96265000000" 
                          className="text-muted-foreground font-light hover:text-primary transition-colors"
                        >
                          +962 6 500 0000
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Prefer to speak directly? Call us during business hours 
                      (Sunday–Thursday, 9am–6pm GST) or leave a message anytime.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
