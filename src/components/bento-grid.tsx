import { Sparkles, UserCheck, Compass, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface BentoItem {
  id?: string;
  tag?: string;
  title: string;
  description: string;
  meta?: string;
}

export interface BentoGridProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: BentoItem[];
}

export function BentoGrid({
  eyebrow = "The Atelier Experience",
  title = "Curated Luxury & Craft",
  description = "Every detail at KULT is meticulously engineered to provide an oasis of relaxation and refined personal care in the heart of Senopati.",
  items = [
    {
      id: "signature-ritual",
      tag: "Featured Ritual",
      title: "The Signature KULT Experience",
      description:
        "A complete grooming journey combining precision haircutting, hot towel royal shave, facial scalp massage, and our signature styling consultation paired with a complimentary single-origin pour-over or whiskey.",
      meta: "Duration: 75 Mins",
    },
    {
      id: "private-suite",
      tag: "Exclusive",
      title: "VIP Private Suite",
      description:
        "An isolated sanctuary for high-profile clients seeking absolute privacy, complete with dedicated master artisan and private bar access.",
      meta: "By Appointment Only",
    },
    {
      id: "diagnostics",
      tag: "Consultation",
      title: "Scalp & Hair Diagnostics",
      description:
        "Advanced microscopic analysis to evaluate follicle health, scalp condition, and tailored product prescriptions.",
      meta: "Complimentary with Cuts",
    },
    {
      id: "artisans",
      tag: "Expertise",
      title: "Master Artisans & Heritage Craft",
      description:
        "Our barbers undergo rigorous international training in London and Tokyo, blending classic scissor work with modern fade engineering.",
      meta: "Certified Professionals",
    },
  ],
}: BentoGridProps) {
  const card1 = items[0];
  const card2 = items[1];
  const card3 = items[2];
  const card4 = items[3];

  return (
    <section id="bento" className="py-20 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            {eyebrow && (
              <Badge variant="outline" className="border-amber-500/30 text-amber-400 mb-3 font-mono text-xs">
                {eyebrow}
              </Badge>
            )}
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">{title}</h2>
          </div>
          {description && (
            <p className="text-zinc-400 max-w-md mt-4 md:mt-0 leading-relaxed text-sm">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Featured (8 cols) */}
          {card1 && (
            <div className="md:col-span-8 group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 overflow-hidden flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Sparkles className="size-32 text-amber-500" />
              </div>
              <div className="relative z-10 max-w-lg">
                <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">{card1.tag || "Featured Ritual"}</Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{card1.title}</h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  {card1.description}
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between pt-6 border-t border-zinc-800/80">
                <span className="font-mono text-amber-500 font-semibold text-sm">{card1.meta || "Duration: 75 Mins"}</span>
                <div className="size-10 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Private Suite (4 cols) */}
          {card2 && (
            <div className="md:col-span-4 group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 overflow-hidden flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50">
              <div className="relative z-10">
                <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700 mb-4">{card2.tag || "Exclusive"}</Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{card2.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {card2.description}
                </p>
              </div>
              <div className="relative z-10 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400 uppercase">{card2.meta || "By Appointment Only"}</span>
                <div className="size-9 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Diagnostics (5 cols) */}
          {card3 && (
            <div className="md:col-span-5 group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 overflow-hidden flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50">
              <div className="relative z-10">
                <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">{card3.tag || "Consultation"}</Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{card3.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {card3.description}
                </p>
              </div>
              <div className="relative z-10 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="font-mono text-amber-500 text-xs">{card3.meta || "Complimentary with Cuts"}</span>
                <Compass className="size-5 text-zinc-500 group-hover:text-amber-500 transition-colors" />
              </div>
            </div>
          )}

          {/* Card 4: Masters (7 cols) */}
          {card4 && (
            <div className="md:col-span-7 group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 overflow-hidden flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50">
              <div className="relative z-10">
                <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700 mb-4">{card4.tag || "Expertise"}</Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{card4.title}</h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  {card4.description}
                </p>
              </div>
              <div className="relative z-10 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400">{card4.meta || "Certified Professionals"}</span>
                <UserCheck className="size-5 text-amber-500" />
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
