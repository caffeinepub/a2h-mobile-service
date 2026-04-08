import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Battery,
  ChevronRight,
  Cpu,
  Download,
  Droplets,
  Hammer,
  MapPin,
  Phone,
  Settings,
  Smartphone,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  {
    icon: Smartphone,
    name: "Mobile Screen Replacement",
    desc: "OEM quality screens for all smartphone brands",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    desc: "Genuine battery replacements, restore full capacity",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    desc: "Advanced ultrasonic cleaning and restoration",
  },
  {
    icon: Download,
    name: "Software Installation",
    desc: "OS reinstall, firmware flash, app setup",
  },
  {
    icon: Wrench,
    name: "All Brand Mobile Repair",
    desc: "Certified repairs for every major brand",
  },
  {
    icon: Cpu,
    name: "PCB Motherboard IC Level Service",
    desc: "Precision IC-level motherboard diagnostics and repair",
  },
  {
    icon: Hammer,
    name: "Mobile & Motherboard Experts",
    desc: "Experienced technicians, 10+ years in the field",
  },
  {
    icon: Settings,
    name: "All Mobile Brands PCB IC Service",
    desc: "Component-level repair for all smartphone brands",
  },
];

const BRANDS = [
  "iPhone",
  "OPPO",
  "Samsung",
  "Mi",
  "Vivo",
  "Realme",
  "OnePlus",
  "Nokia",
];

const GALLERY = [
  { src: "/assets/images/a2h-banner.png", alt: "A2H Mobile Service Centre" },
  {
    src: "/assets/generated/a2h-repair-work.dim_800x600.jpg",
    alt: "Motherboard repair work",
  },
  {
    src: "/assets/generated/a2h-screen-repair.dim_800x600.jpg",
    alt: "Screen replacement service",
  },
  {
    src: "/assets/generated/a2h-water-repair.dim_800x600.jpg",
    alt: "Water damage repair",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/a2h-banner.png')" }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/40 font-semibold tracking-wider uppercase text-xs px-4 py-1.5">
              Trusted Repair Experts
            </Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
              A2H Mobile Service Centre
            </h1>
            <p className="font-body text-xl sm:text-2xl text-primary font-semibold mb-3">
              Fast & Reliable Mobile Repair Services
            </p>
            <p className="font-body text-base sm:text-lg text-muted-foreground mb-8">
              Mobile & Motherboard Repair Experts — Serving Melvisharam since
              2010
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9994342375" data-ocid="hero-cta">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/85 font-bold text-base px-8 gap-2.5 shadow-lg shadow-primary/25 transition-smooth"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 9994342375
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-card hover:border-primary/60 font-semibold text-base px-8 transition-smooth"
                onClick={() =>
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Services
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 text-xs font-semibold uppercase tracking-wider px-4 py-1.5">
              What We Fix
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Our Services
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              From screen replacements to complex motherboard repairs — we
              handle it all with precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-card border border-border rounded-xl p-5 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-smooth cursor-default"
                data-ocid={`service-card-${i}`}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/25 group-hover:bg-primary/20 group-hover:border-primary/50 transition-smooth">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground leading-snug mb-2">
                  {svc.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 text-xs font-semibold uppercase tracking-wider px-4 py-1.5">
              All Brands Welcome
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Brands We Service
            </h2>
            <p className="text-muted-foreground mt-3">
              Expert repairs for all major smartphone brands
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {BRANDS.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="px-6 py-3 bg-card border border-primary/30 rounded-xl font-display font-semibold text-foreground hover:border-primary hover:bg-primary/10 transition-smooth cursor-default"
                data-ocid={`brand-badge-${brand.toLowerCase()}`}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 text-xs font-semibold uppercase tracking-wider px-4 py-1.5">
              Our Workshop
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Our Work
            </h2>
            <p className="text-muted-foreground mt-3">
              Real repairs, real results — quality you can see
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`group overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-smooth ${i === 0 ? "col-span-2 row-span-1" : ""}`}
                data-ocid={`gallery-item-${i}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-smooth"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/assets/images/placeholder.svg";
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 text-xs font-semibold uppercase tracking-wider px-4 py-1.5">
              Get In Touch
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground mt-3">
              Visit us or call today — fast service guaranteed
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-smooth"
              data-ocid="contact-address"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/15 border border-primary/30">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  Our Location
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                10. C. Abdul Hakeem Road,
                <br />
                Melvisharam – 632509,
                <br />
                Tamil Nadu, India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-smooth"
              data-ocid="contact-phone"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/15 border border-primary/30">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  Call Us
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-5">
                Available 9 AM – 8 PM, Monday to Saturday.
                <br />
                Walk-ins welcome, same-day service available.
              </p>
              <a href="tel:9994342375" data-ocid="contact-cta">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/85 font-bold gap-2 shadow-md shadow-primary/20 transition-smooth">
                  <Phone className="w-4 h-4" />
                  9994342375 — Call Now
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
