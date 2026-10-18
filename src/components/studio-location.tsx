import React from "react";
import { MapPin, ParkingSquare, MessageSquare, ExternalLink, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StudioLocation() {
  return (
    <section className="w-full py-24 bg-surface-container-lowest border-t border-surface-container-highest/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Details & Working Hours (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-xl bg-surface-container border border-surface-container-highest">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-2">Location Sanctuary</span>
              <h2 className="text-2xl lg:text-3xl font-headline font-semibold text-on-surface mb-4">Senopati Studio</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 font-body">
                Discreetly situated in the heartbeat of Kebayoran Baru with private valet parking and direct concierge entrance.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-on-surface font-medium block font-body">Jl. Senopati No. 42</span>
                    <span className="font-mono text-xs text-on-surface-variant">Kebayoran Baru, Jakarta Selatan, 12190</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ParkingSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-on-surface font-medium block font-body">Complimentary Valet</span>
                    <span className="font-mono text-xs text-on-surface-variant">Available directly at atelier courtyard gate</span>
                  </div>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="p-4 rounded-lg bg-surface-container-low mb-6 border border-surface-container-highest">
                <div className="flex justify-between py-1.5 border-b border-surface-container-highest">
                  <span className="font-mono text-xs text-on-surface">Monday – Friday</span>
                  <span className="font-mono text-xs text-primary font-medium">10:00 – 21:00</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-mono text-xs text-on-surface">Saturday – Sunday</span>
                  <span className="font-mono text-xs text-primary font-medium">09:00 – 21:00</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-surface-container-highest">
              <a
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface font-mono text-xs uppercase tracking-wider transition-colors w-full text-center border border-surface-container-highest"
                href="https://wa.me/628118899420"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>WhatsApp Concierge</span>
              </a>
              <Button asChild className="w-full bg-primary text-on-primary hover:bg-primary/90 font-mono text-xs uppercase tracking-wider font-semibold">
                <a href="#quick-booking">Book Chair</a>
              </Button>
            </div>
          </div>

          {/* Right: Map View Container (7 cols) */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden min-h-[380px] relative bg-surface-container-high border border-surface-container-highest flex items-center justify-center">
            {/* Styled Map Placeholder */}
            <div className="absolute inset-0 bg-surface-container-lowest flex flex-col items-center justify-center p-8 text-center">
              <Compass className="w-12 h-12 text-primary/40 animate-pulse mb-3" />
              <div className="font-headline text-lg font-medium text-on-surface mb-1">KULT Atelier Senopati Sanctuary</div>
              <div className="font-mono text-xs text-on-surface-variant max-w-sm mb-6">
                Coordinates: -6.2297, 106.8075 — Kebayoran Baru, South Jakarta
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface-container-high hover:bg-surface-container-highest text-primary font-mono text-xs uppercase tracking-wider border border-surface-container-highest transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
