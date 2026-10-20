import { AppHeader } from "@/components/app-header";
import { HeroSection, type HeroSectionProps } from "@/components/hero-section";
import { BentoGrid, type BentoGridProps } from "@/components/bento-grid";
import { ServicesMenu, type ServicesMenuProps } from "@/components/services-menu";
import { StudioLocation, type StudioLocationProps } from "@/components/studio-location";
import { BookingSection } from "@/components/booking-section";
import { Footer, type FooterProps } from "@/components/footer";
import { getKultPage } from "@/lib/cms-client";

export default async function Home() {
  const pageData = await getKultPage("/");
  const blocks = pageData.blocks || [];

  // Find respective block props from CMS delivery
  const heroBlock = blocks.find((b) => b.type === "hero-atelier" || b.type === "hero");
  const bentoBlock = blocks.find((b) => b.type === "bento-grid");
  const servicesBlock = blocks.find((b) => b.type === "service-cards" || b.type === "services");
  const locationBlock = blocks.find((b) => b.type === "map-location" || b.type === "location");
  const footerBlock = blocks.find((b) => b.type === "footer");

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 font-sans selection:bg-amber-500 selection:text-zinc-950">
      <AppHeader />
      <main className="flex-1">
        <HeroSection {...(heroBlock?.props as HeroSectionProps | undefined)} />
        <BentoGrid {...(bentoBlock?.props as BentoGridProps | undefined)} />
        <ServicesMenu {...(servicesBlock?.props as ServicesMenuProps | undefined)} />
        <BookingSection />
        <StudioLocation {...(locationBlock?.props as StudioLocationProps | undefined)} />
      </main>
      <Footer {...(footerBlock?.props as FooterProps | undefined)} />
    </div>
  );
}
