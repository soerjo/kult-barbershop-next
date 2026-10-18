"use client";

import { useState } from "react";
import { Check, Clock, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
}

const services: ServiceItem[] = [
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
    name: "Beard Sculpting & Trim",
    category: "Grooming",
    price: "IDR 200,000",
    duration: "30 Mins",
    description: "Detailed beard shaping, razor line-up, conditioning beard oil treatment, and mustache wax styling.",
    features: ["Beard Shaping & Trim", "Straight Razor Line-up", "Organic Beard Oil Treatment", "Mustache Styling"]
  },
  {
    id: "5",
    name: "Deep Scalp Detox Treatment",
    category: "Treatment",
    price: "IDR 400,000",
    duration: "45 Mins",
    description: "Revitalizing treatment targeting follicle buildup, dandruff, and scalp tension with botanical serums and pressure point massage.",
    features: ["Microscopic Scalp Analysis", "Exfoliating Scrub", "Botanical Serum Infusion", "Pressure Point Massage"]
  },
  {
    id: "6",
    name: "Hair Coloring & Camouflage",
    category: "Color",
    price: "IDR 500,000+",
    duration: "60 Mins",
    description: "Grey blending or full bespoke color transformation using premium ammonia-free professional formulas.",
    features: ["Color Consultation", "Ammonia-Free Formula", "Processing & Wash", "Post-Color Treatment"]
  }
];

export function ServicesMenu() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="border-amber-500/30 text-amber-400 mb-3">Atelier Menu</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">Services & Pricing</h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Transparent pricing for uncompromising craftsmanship. Select any service to view detailed ritual components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bg-zinc-900/40 border-zinc-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs font-mono">
                    {service.category}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <Clock className="size-3.5 text-amber-500" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.name}
                </h3>

                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                  <span className="text-lg font-bold font-mono text-amber-500">{service.price}</span>
                  <div className="flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                    <span>Details</span>
                    <ChevronRight className="size-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal / Detail Drawer simulated inline or popup */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                  {selectedService.category} Ritual
                </Badge>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="size-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedService.name}</h3>
              <p className="text-amber-500 font-mono text-lg font-bold mb-4">{selectedService.price} <span className="text-xs text-zinc-400 font-normal">({selectedService.duration})</span></p>

              <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400">Included in Ritual:</h4>
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300 bg-zinc-950/50 p-2.5 rounded-lg border border-zinc-800/60">
                    <div className="size-5 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center">
                      <Check className="size-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  onClick={() => setSelectedService(null)}
                  variant="outline" 
                  className="flex-1 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
                >
                  Close
                </Button>
                <Button 
                  onClick={() => {
                    alert(`Booking request initiated for ${selectedService.name}`);
                    setSelectedService(null);
                  }}
                  className="flex-1 bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold"
                >
                  Book This Service
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
