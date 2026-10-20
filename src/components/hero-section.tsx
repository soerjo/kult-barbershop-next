import { Sparkles, ArrowRight, ShieldCheck, Star, Award, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroMetric {
  icon?: string;
  value?: string;
  label?: string;
}

interface HeroCta {
  text?: string;
  href?: string;
}

export interface HeroSectionProps {
  badge?: string;
  headline?: string;
  subheadline?: string;
  description?: string;
  primaryCta?: HeroCta | string;
  secondaryCta?: HeroCta | string;
  metrics?: HeroMetric[];
}

export function HeroSection({
  badge = "Redefining Precision Haircuts & Grooming in Senopati",
  headline = "Precision Cuts. Modern Craft.",
  subheadline = "Elevated Grooming.",
  description = "Welcome to KULT Barber & Atelier, where heritage barbering meets contemporary atelier precision. Experience uncompromising styling in an exclusive sanctuary designed for the modern gentleman.",
  primaryCta = { text: "Reserve Your Seat", href: "#booking" },
  secondaryCta = { text: "Explore Services & Pricing", href: "#services" },
  metrics = [
    { icon: "shield", value: "12,000+", label: "Precision Cuts" },
    { icon: "star", value: "4.9", label: "Rating Score" },
    { icon: "award", value: "Top-Tier", label: "Master Artisans" },
    { icon: "coffee", value: "Bar & Café", label: "Single Origin & Whiskey" },
  ],
}: HeroSectionProps) {
  const primaryText = typeof primaryCta === "string" ? primaryCta : primaryCta?.text || "Reserve Your Seat";
  const primaryHref = typeof primaryCta === "string" ? "#booking" : primaryCta?.href || "#booking";

  const secondaryText = typeof secondaryCta === "string" ? secondaryCta : secondaryCta?.text || "Explore Services & Pricing";
  const secondaryHref = typeof secondaryCta === "string" ? "#services" : secondaryCta?.href || "#services";

  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-zinc-950">
      {/* Background gradients and dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Overline Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium tracking-wide mb-6">
              <Sparkles className="size-3.5" />
              <span>{badge}</span>
            </div>
          )}

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            {headline} <br />
            {subheadline && (
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                {subheadline}
              </span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
            <Button asChild size="lg" className="w-full sm:w-auto bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold px-8 h-12 shadow-xl shadow-amber-500/20 text-base">
              <a href={primaryHref}>
                <span>{primaryText}</span>
                <ArrowRight className="size-4 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white px-8 h-12 text-base">
              <a href={secondaryHref}>
                {secondaryText}
              </a>
            </Button>
          </div>

          {/* Metrics Strip */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-10 border-t border-zinc-800/80">
              {metrics.map((m, idx) => {
                const isStar = m.icon === "star" || idx === 1;
                const isShield = m.icon === "shield" || idx === 0;
                const isAward = m.icon === "award" || idx === 2;
                return (
                  <div key={idx} className="flex flex-col items-center p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-amber-500 mb-1">
                      {isShield && <ShieldCheck className="size-5" />}
                      {isStar && <Star className="size-5 fill-amber-500" />}
                      {isAward && <Award className="size-5" />}
                      {!isShield && !isStar && !isAward && <Coffee className="size-5" />}
                      <span className="text-2xl font-bold text-white tracking-tight font-mono tabular-nums">{m.value}</span>
                    </div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">{m.label}</span>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
