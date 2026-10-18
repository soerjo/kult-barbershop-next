import React from "react";
import { Star } from "lucide-react";

interface Review {
  quote: string;
  name: string;
  title: string;
}

const reviews: Review[] = [
  {
    quote: "KULT is entirely in a league of its own for Jakarta. The scalp camera analysis opened my eyes to how my hair should actually be textured. Arya’s fade has no hard lines whatsoever. Flawless execution.",
    name: "Reza Wicaksono",
    title: "Architect, Senopati"
  },
  {
    quote: "The hot towel shave ritual is absolute poetry. Between the hot lather, Japanese single malt, and jazz spinning on vinyl, you completely forget you are in South Jakarta traffic. Unbelievable value.",
    name: "Marcus Vance",
    title: "Creative Director"
  },
  {
    quote: "Booked the Father & Son legacy cut for my boy's 10th birthday. The level of care, patience, and bespoke hospitality they extended was world-class. KULT is now our permanent family tradition.",
    name: "Hendra Gunawan",
    title: "Managing Partner"
  }
];

export function Testimonials() {
  return (
    <section className="w-full py-24 bg-surface" id="experience">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Client Verifications</span>
          <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-on-surface mb-4">Uncompromising Standard</h2>
          <div className="flex items-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary" />
            ))}
            <span className="ml-2 font-mono text-xs text-on-surface font-semibold">4.9 AVERAGE ON GOOGLE MAPS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div key={index} className="p-8 rounded-xl bg-surface-container border border-surface-container-highest flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary" />
                  ))}
                </div>
                <p className="text-base text-on-surface leading-relaxed mb-6 font-body italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-surface-container-highest">
                <div>
                  <span className="text-sm font-semibold text-on-surface font-headline block">{rev.name}</span>
                  <span className="font-mono text-xs text-on-surface-variant">{rev.title}</span>
                </div>
                <span className="font-mono text-[10px] text-primary uppercase bg-surface-container-high px-2 py-0.5 rounded border border-surface-container-highest">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
