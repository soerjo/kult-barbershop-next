import { Scissors, MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Scissors className="size-4" />
              </div>
              <span className="font-bold tracking-wider text-white uppercase">KULT</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Precision haircuts & elevated grooming atelier in Senopati, Jakarta Selatan. Heritage craftsmanship meeting modern luxury.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="size-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-amber-500 hover:border-amber-500/50 transition-colors">
                <Instagram className="size-4" />
              </a>
              <a href="#" className="size-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-amber-500 hover:border-amber-500/50 transition-colors">
                <Phone className="size-4" />
              </a>
              <a href="#" className="size-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-amber-500 hover:border-amber-500/50 transition-colors">
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider font-mono">Location</h4>
            <div className="flex items-start gap-3 text-xs mb-3">
              <MapPin className="size-4 text-amber-500 shrink-0 mt-0.5" />
              <span>Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan 12190</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider font-mono">Operating Hours</h4>
            <div className="flex items-start gap-3 text-xs mb-3">
              <Clock className="size-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-zinc-200 font-medium">Monday — Sunday</p>
                <p className="text-zinc-400">10:00 AM – 09:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider font-mono">Whiskey & Coffee Bar</h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Complimentary single-origin pour-overs and premium single malt whiskey selections for every esteemed guest.
            </p>
            <span className="inline-block px-3 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
              Licensed Atelier
            </span>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} KULT Barber & Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
