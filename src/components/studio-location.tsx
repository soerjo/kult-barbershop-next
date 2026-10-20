import React from "react";
import { MapPin, ParkingSquare, MessageSquare, ExternalLink, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface StudioLocationProps {
  title?: string;
  address?: string;
  valet?: string;
  openingHours?: string;
  whatsapp?: string;
}

export function StudioLocation({
  title = "Location Sanctuary",
  address = "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan, 12190",
  valet = "Available directly at atelier courtyard gate",
  openingHours = "Mon-Sun: 09:00 - 21:00 WIB",
  whatsapp = "+62 811-9234-888",
}: StudioLocationProps) {
  const mapQueryUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  const waUrl = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Halo KULT Barber, saya ingin reservasi.")}`;

  return (
    <section id="location" className="w-full py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details & Working Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm">
            <div>
              <span className="font-mono text-xs text-amber-500 uppercase tracking-widest block mb-2">{title}</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Senopati Studio</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Discreetly situated in the heartbeat of Kebayoran Baru with private valet parking and direct concierge entrance.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-white font-medium block">Atelier Address</span>
                    <span className="font-mono text-xs text-zinc-400">{address}</span>
                  </div>
                </div>
                {valet && (
                  <div className="flex items-start gap-3">
                    <ParkingSquare className="size-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm text-white font-medium block">Complimentary Valet</span>
                      <span className="font-mono text-xs text-zinc-400">{valet}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Operating Hours */}
              {openingHours && (
                <div className="p-4 rounded-xl bg-zinc-950/80 mb-6 border border-zinc-800/80">
                  <div className="flex justify-between py-1.5 border-b border-zinc-900">
                    <span className="font-mono text-xs text-zinc-400">Operating Schedule</span>
                    <span className="font-mono text-xs text-amber-500 font-medium">{openingHours}</span>
                  </div>
                  <div className="flex justify-between py-1.5 pt-2">
                    <span className="font-mono text-xs text-zinc-400">Concierge Desk</span>
                    <span className="font-mono text-xs text-emerald-400 font-medium">Available</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800/60">
              <Button asChild size="sm" className="bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold gap-1.5 h-10">
                <a href={mapQueryUrl} target="_blank" rel="noreferrer">
                  <Compass className="size-4" />
                  <span>Get Directions</span>
                </a>
              </Button>
              {whatsapp && (
                <Button asChild size="sm" variant="outline" className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white gap-1.5 h-10">
                  <a href={waUrl} target="_blank" rel="noreferrer">
                    <MessageSquare className="size-4" />
                    <span>WhatsApp Concierge</span>
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Right: Map / Visual Atelier Showcase */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-800 overflow-hidden relative min-h-[380px] bg-zinc-900/20 flex flex-col justify-end p-8">
            <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-2 pointer-events-none">
              <div className="size-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mx-auto">
                <MapPin className="size-6" />
              </div>
              <p className="font-mono text-xs text-zinc-400">KULT Atelier & Lounge — Senopati No. 42</p>
            </div>
            
            <div className="relative z-10 p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-md flex items-center justify-between">
              <div>
                <p className="text-white text-xs font-semibold">Ready for your ritual?</p>
                <p className="text-[11px] text-zinc-400 font-mono">Walk-ins welcome based on availability</p>
              </div>
              <Button asChild size="sm" variant="ghost" className="text-amber-500 hover:text-amber-400 hover:bg-amber-500/10 text-xs h-8">
                <a href={mapQueryUrl} target="_blank" rel="noreferrer">
                  <span>Open in Maps</span>
                  <ExternalLink className="size-3.5 ml-1" />
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
