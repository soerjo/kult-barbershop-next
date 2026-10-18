import { AppHeader } from "@/components/app-header";
import { HeroSection } from "@/components/hero-section";
import { BentoGrid } from "@/components/bento-grid";
import { ServicesMenu } from "@/components/services-menu";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 font-sans selection:bg-amber-500 selection:text-zinc-950">
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <BentoGrid />
        <ServicesMenu />
      </main>
      <Footer />
    </div>
  );
}
