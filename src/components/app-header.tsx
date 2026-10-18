import Link from "next/link";
import { Scissors, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-zinc-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="size-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">
            <Scissors className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-wider text-lg uppercase text-white">KULT</span>
            <span className="text-[10px] tracking-widest text-amber-500 uppercase font-mono">Barber & Atelier</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#services" className="hover:text-amber-500 transition-colors">Services</Link>
          <Link href="#bento" className="hover:text-amber-500 transition-colors">Atelier</Link>
          <Link href="#masters" className="hover:text-amber-500 transition-colors">Master Artisans</Link>
          <Link href="#lounge" className="hover:text-amber-500 transition-colors">Whiskey & Coffee</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:inline-flex border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300">
            <Phone className="size-4 mr-2" />
            <span>Senopati</span>
          </Button>
          <Button className="bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold shadow-lg shadow-amber-500/20">
            <Calendar className="size-4 mr-2" />
            <span>Reserve Seat</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
