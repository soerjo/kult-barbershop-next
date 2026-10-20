"use client";

import { useState } from "react";
import { Check, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
 // button removed
import { Card, CardContent } from "@/components/ui/card";

export interface ServiceItem {
  id: string;
  name: string;
  category?: string;
  price: string;
  duration?: string;
  description: string;
  features?: string[];
}

export interface ServicesMenuProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  services?: ServiceItem[];
}

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: "1",
    name: "The KULT Signature Haircut",
    category: "Hair",
    price: "IDR 350,000",
    duration: "45 Mins",
    description: "Tailored consultation, precision scissor or clipper cut, shampoo & scalp massage, hot towel finish, and professional style styling.",
    features: ["Consultation & Face Shape Analysis", "Precision Cut", "Shampoo & Scalp Massage", "Hot Towel & Styling Finish"]
  },
  {
    id: "2",
    name: "Royal Hot Towel Shave",
    category: "Shave",
    price: "IDR 250,000",
    duration: "30 Mins",
    description: "Traditional straight razor shave featuring pre-shave botanical oils, multiple warm eucalyptus hot towels, and soothing post-shave balm.",
    features: ["Pre-shave Botanical Oil", "Warm Eucalyptus Hot Towels", "Straight Razor Shave", "Post-shave Balm & Massage"]
  },
  {
    id: "3",
    name: "Father & Son Cut",
    category: "Special",
    price: "IDR 550,000",
    duration: "60 Mins",
    description: "Side-by-side premium grooming experience for fathers and sons (under 12 years old), complete with styling and complimentary drinks.",
    features: ["Dual Master Barbers", "Custom Cuts for Both", "Complimentary Beverages", "Special Styling Finish"]
  },
  {
    id: "4",
    name: "Beard Sculpt & Contouring",
    category: "Shave",
    price: "IDR 180,000",
    duration: "25 Mins",
    description: "Line-up sculpting with straight razor precision, trimming, organic beard oil conditioning, and hot towel finish.",
    features: ["Length & Shape Consultation", "Straight Razor Edging", "Organic Conditioning Oil", "Hot Towel Finish"]
  },
  {
    id: "5",
    name: "Scalp Clarifying Detox",
    category: "Treatment",
    price: "IDR 300,000",
    duration: "40 Mins",
    description: "Deep exfoliation treatment removing product buildup, balancing sebum production, followed by a peptide tonic scalp massage.",
    features: ["Microscopic Scalp Analysis", "Sea Salt Scalp Scrub", "Stimulating Massage", "Peptide Infusion Tonic"]
  },
  {
    id: "6",
    name: "Charcoal Purifying Facial",
    category: "Treatment",
    price: "IDR 275,000",
    duration: "35 Mins",
    description: "Activated bamboo charcoal deep pore cleansing, steam extraction, cold stone pore closing, and botanical hydration serum.",
    features: ["Deep Cleansing Wash", "Warm Botanical Steam", "Activated Charcoal Mask", "Cold Jade Roller Finish"]
  }
];

export function ServicesMenu({
  eyebrow = "Service Menu",
  title = "Tailored Grooming Rituals",
  description = "All services include complimentary consultation, premium Japanese hair wash, and hot towel refreshment.",
  services = DEFAULT_SERVICES,
}: ServicesMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(services.map((s) => s.category).filter(Boolean)))];

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-zinc-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          {eyebrow && (
            <Badge variant="outline" className="border-amber-500/30 text-amber-400 mb-3 font-mono text-xs">
              {eyebrow}
            </Badge>
          )}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          )}

          {/* Category Tabs */}
          {categories.length > 2 && (
            <div className="flex items-center gap-2 mt-8 p-1.5 rounded-full bg-zinc-950 border border-zinc-800 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as string)}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-amber-500 text-zinc-950 font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm flex flex-col justify-between hover:border-amber-500/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                    {service.name}
                  </h3>
                  <span className="font-mono text-amber-500 font-bold text-base whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
                
                {service.duration && (
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4 font-mono">
                    <Clock className="size-3.5" />
                    <span>{service.duration}</span>
                  </div>
                )}

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2 border-t border-zinc-900 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="size-3.5 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
