"use client";

import React, { useState } from "react";
import { Scissors, User, Calendar, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BookingSection() {
  const [selectedService, setSelectedService] = useState("Executive Cut");
  const [selectedArtisan, setSelectedArtisan] = useState("Arya Pratama");
  const [selectedTime, setSelectedTime] = useState("15:30");
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 4000);
  };

  return (
    <section className="w-full py-24 bg-surface-container-lowest relative overflow-hidden" id="quick-booking">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="rounded-2xl bg-surface-container border border-surface-container-highest p-8 lg:p-12 relative shadow-2xl">
          {/* Live Availability Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-surface-container-highest">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-1">Frictionless Experience</span>
              <h2 className="text-2xl font-headline font-semibold text-on-surface">Instant Chair Reservation</h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-surface-container-highest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
              </span>
              <span className="font-mono text-xs text-on-surface">Next Available: Today at 15:30 (Arya P.)</span>
            </div>
          </div>

          {/* Stepper Wizard Preview (3-Step Flow) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Step 1: Select Service */}
            <div className="p-6 rounded-xl bg-surface-container-high border border-surface-container-highest flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-primary">STEP 01</span>
                  <Scissors className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-headline font-medium text-on-surface mb-2">Select Service</h3>
                <p className="text-sm text-on-surface-variant mb-6 font-body">Choose your grooming session protocol.</p>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors border border-surface-container-highest">
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="booking-service"
                        checked={selectedService === "Executive Cut"}
                        onChange={() => setSelectedService("Executive Cut")}
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm text-on-surface font-medium font-body">Executive Cut</span>
                    </span>
                    <span className="font-mono text-xs text-primary">IDR 250k</span>
                  </label>
                  <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors border border-surface-container-highest">
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="booking-service"
                        checked={selectedService === "Royal Hot Shave"}
                        onChange={() => setSelectedService("Royal Hot Shave")}
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm text-on-surface font-medium font-body">Royal Hot Shave</span>
                    </span>
                    <span className="font-mono text-xs text-primary">IDR 200k</span>
                  </label>
                </div>
              </div>
              <span className="font-mono text-xs text-on-surface-variant pt-4 block">Scalp consultation included</span>
            </div>

            {/* Step 2: Choose Artisan */}
            <div className="p-6 rounded-xl bg-surface-container-high border border-surface-container-highest flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-primary">STEP 02</span>
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-headline font-medium text-on-surface mb-2">Choose Artisan</h3>
                <p className="text-sm text-on-surface-variant mb-6 font-body">Select your dedicated craft practitioner.</p>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors border border-surface-container-highest">
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="booking-artisan"
                        checked={selectedArtisan === "Arya Pratama"}
                        onChange={() => setSelectedArtisan("Arya Pratama")}
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm text-on-surface font-medium font-body">Arya Pratama</span>
                    </span>
                    <span className="font-mono text-xs text-primary">Fades</span>
                  </label>
                  <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors border border-surface-container-highest">
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="booking-artisan"
                        checked={selectedArtisan === "Daniel Santoso"}
                        onChange={() => setSelectedArtisan("Daniel Santoso")}
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm text-on-surface font-medium font-body">Daniel Santoso</span>
                    </span>
                    <span className="font-mono text-xs text-primary">Scissor</span>
                  </label>
                </div>
              </div>
              <span className="font-mono text-xs text-on-surface-variant pt-4 block">Or choose 'First Available'</span>
            </div>

            {/* Step 3: Pick Time Slot */}
            <div className="p-6 rounded-xl bg-surface-container-high border border-surface-container-highest flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-primary">STEP 03</span>
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-headline font-medium text-on-surface mb-2">Pick Time Slot</h3>
                <p className="text-sm text-on-surface-variant mb-6 font-body">Select your preferred Senopati chair window.</p>
                <div className="grid grid-cols-3 gap-2">
                  {["14:00", "15:30", "17:00", "18:15", "19:30", "20:15"].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2.5 rounded font-mono text-xs transition-colors border border-surface-container-highest ${
                        selectedTime === time
                          ? "bg-primary text-on-primary-fixed font-medium shadow-sm border-primary"
                          : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <span className="font-mono text-xs text-primary pt-4 block">Instant confirmation via WhatsApp</span>
            </div>
          </div>

          {/* Booking Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-surface-container-highest">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm text-on-surface-variant font-body">No cancellation fee up to 2 hours prior to scheduled chair appointment.</span>
            </div>
            <Button
              onClick={handleConfirm}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary text-on-primary hover:bg-primary/90 font-body text-sm font-semibold transition-all shadow-md"
            >
              {confirmed ? (
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" /> Chair Reserved Successfully!
                </span>
              ) : (
                "Confirm Chair Reservation"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
