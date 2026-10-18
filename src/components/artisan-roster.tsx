import React from "react";
import { ChevronRight } from "lucide-react";

interface Artisan {
  name: string;
  role: string;
  specialty: string;
  exp: string;
  desc: string;
}

const artisans: Artisan[] = [
  {
    name: "Arya Pratama",
    role: "SENIOR FELLOW",
    specialty: "Skin Fade & Taper Specialist",
    exp: "11 YRS CRAFT",
    desc: "Trained in Shibuya, Tokyo. Master of razor-precise gradients, micro-fades, and geometric hairline alignment."
  },
  {
    name: "Daniel Santoso",
    role: "LEAD ARCHITECT",
    specialty: "Classic Scissor Architect",
    exp: "14 YRS CRAFT",
    desc: "London Academy certified. Specializes in traditional scissor-over-comb cuts, textured business tapers, and flow designs."
  },
  {
    name: "Bima Wijaya",
    role: "ATELIER MASTER",
    specialty: "Beard Sculptor & Shave Specialist",
    exp: "8 YRS CRAFT",
    desc: "Pioneer of organic facial hair contouring, hot oil beard conditioning, and flawless straight razor symmetry."
  }
];

export function ArtisanRoster() {
  return (
    <section className="w-full py-24 bg-surface" id="master-barbers">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-2">The Guild</span>
            <h2 className="text-3xl lg:text-4xl font-headline font-semibold text-on-surface">Master Artisans</h2>
          </div>
          <p className="text-base text-on-surface-variant max-w-md font-body">
            Every barber at KULT operates as an independent craft architect with deep specialization across classic scissor craft, high tapers, and beard sculpting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <div key={index} className="group rounded-xl bg-surface-container border border-surface-container-highest overflow-hidden transition-all duration-300">
              <div className="relative h-80 w-full overflow-hidden bg-surface-container-lowest">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent z-10"></div>
                <div className="absolute top-4 right-4 z-20 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full border border-surface-container-highest">
                  <span className="font-mono text-xs text-primary">{artisan.exp}</span>
                </div>
                {/* Visual placeholder for portrait */}
                <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center font-headline text-5xl font-bold text-surface-bright group-hover:scale-105 transition-transform duration-500">
                  {artisan.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-xl font-headline font-medium text-on-surface">{artisan.name}</h3>
                  <span className="font-mono text-xs text-secondary">{artisan.role}</span>
                </div>
                <p className="font-mono text-xs text-primary mb-3">{artisan.specialty}</p>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-body">
                  {artisan.desc}
                </p>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary font-body text-sm font-medium text-on-surface transition-all border border-surface-container-highest"
                  href="#quick-booking"
                >
                  <span>Book With {artisan.name.split(' ')[0]}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
