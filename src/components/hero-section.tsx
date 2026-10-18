import { Sparkles, ArrowRight, ShieldCheck, Star, Award, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-zinc-950">
      {/* Background gradients and dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium tracking-wide mb-6">
            <Sparkles className="size-3.5" />
            <span>Redefining Precision Haircuts & Grooming in Senopati</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Precision Cuts. Modern Craft. <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Elevated Grooming.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Welcome to KULT Barber & Atelier, where heritage barbering meets contemporary atelier precision. Experience uncompromising styling in an exclusive sanctuary designed for the modern gentleman.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
            <Button size="lg" className="w-full sm:w-auto bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold px-8 h-12 shadow-xl shadow-amber-500/20 text-base">
              <span>Reserve Your Seat</span>
              <ArrowRight className="size-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white px-8 h-12 text-base">
              Explore Services & Pricing
            </Button>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-10 border-t border-zinc-800/80">
            
            <div className="flex flex-col items-center p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-500 mb-1">
                <ShieldCheck className="size-5" />
                <span className="text-2xl font-bold text-white tracking-tight">12,000+</span>
              </div>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Precision Cuts</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-500 mb-1">
                <Star className="size-5 fill-amber-500" />
                <span className="text-2xl font-bold text-white tracking-tight">4.9</span>
              </div>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Rating Score</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-500 mb-1">
                <Award className="size-5" />
                <span className="text-2xl font-bold text-white tracking-tight">Top-Tier</span>
              </div>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Master Artisans</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-500 mb-1">
                <Coffee className="size-5" />
                <span className="text-2xl font-bold text-white tracking-tight">Bar & Café</span>
              </div>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Single Origin & Whiskey</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
