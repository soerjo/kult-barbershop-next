export interface CmsBlock {
  id?: string;
  type: string;
  props?: Record<string, unknown>;
}

export interface CmsPageData {
  id: string;
  route: string;
  title: string;
  isHome: boolean;
  blocks: CmsBlock[];
  metaTitle?: string | null;
  metaDescription?: string | null;
}

export const FALLBACK_KULT_PAGE: CmsPageData = {
  id: "fallback-kult",
  route: "/",
  title: "KULT Barber & Atelier — Senopati Sanctuary",
  isHome: true,
  blocks: [
    {
      id: "blk-hero-kult",
      type: "hero-atelier",
      props: {
        badge: "Redefining Precision Haircuts & Grooming in Senopati",
        headline: "Precision Cuts. Modern Craft.",
        subheadline: "Elevated Grooming.",
        description:
          "Welcome to KULT Barber & Atelier, where heritage barbering meets contemporary atelier precision. Experience uncompromising styling in an exclusive sanctuary designed for the modern gentleman.",
        primaryCta: {
          text: "Reserve Your Seat",
          href: "#booking",
        },
        secondaryCta: {
          text: "Explore Services & Pricing",
          href: "#services",
        },
        metrics: [
          { icon: "shield", value: "12,000+", label: "Precision Cuts" },
          { icon: "star", value: "4.9", label: "Rating Score" },
          { icon: "award", value: "Top-Tier", label: "Master Artisans" },
          { icon: "coffee", value: "Bar & Café", label: "Single Origin & Whiskey" },
        ],
      },
    },
    {
      id: "blk-bento-kult",
      type: "bento-grid",
      props: {
        eyebrow: "The Atelier Experience",
        title: "Curated Luxury & Craft",
        description:
          "Every detail at KULT is meticulously engineered to provide an oasis of relaxation and refined personal care in the heart of Senopati.",
        items: [
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
      },
    },
    {
      id: "blk-services-kult",
      type: "service-cards",
      props: {
        eyebrow: "Service Menu",
        title: "Tailored Grooming Rituals",
        description:
          "All services include complimentary consultation, premium Japanese hair wash, and hot towel refreshment.",
        services: [
          {
            id: "1",
            name: "The KULT Signature Haircut",
            category: "Hair",
            price: "IDR 350,000",
            duration: "45 Mins",
            description:
              "Tailored consultation, precision scissor or clipper cut, shampoo & scalp massage, hot towel finish, and professional style styling.",
            features: [
              "Consultation & Face Shape Analysis",
              "Precision Cut",
              "Shampoo & Scalp Massage",
              "Hot Towel & Styling Finish",
            ],
          },
          {
            id: "2",
            name: "Royal Hot Towel Shave",
            category: "Shave",
            price: "IDR 250,000",
            duration: "30 Mins",
            description:
              "Traditional straight razor shave featuring pre-shave botanical oils, multiple warm eucalyptus hot towels, and soothing post-shave balm.",
            features: [
              "Pre-shave Botanical Oil",
              "Warm Eucalyptus Hot Towels",
              "Straight Razor Shave",
              "Post-shave Balm & Massage",
            ],
          },
          {
            id: "3",
            name: "Father & Son Cut",
            category: "Special",
            price: "IDR 550,000",
            duration: "60 Mins",
            description:
              "Side-by-side premium grooming experience for fathers and sons (under 12 years old), complete with styling and complimentary drinks.",
            features: [
              "Dual Master Barbers",
              "Custom Cuts for Both",
              "Complimentary Beverages",
              "Special Styling Finish",
            ],
          },
        ],
      },
    },
    {
      id: "blk-location-kult",
      type: "map-location",
      props: {
        title: "Location Sanctuary",
        address: "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan, 12190",
        valet: "Available directly at atelier courtyard gate",
        openingHours: "Mon-Sun: 09:00 - 21:00 WIB",
        whatsapp: "+62 811-9234-888",
      },
    },
    {
      id: "blk-footer-kult",
      type: "footer",
      props: {
        brand: "KULT Barber & Atelier",
        copyright: "© 2026 KULT Barber & Atelier. All rights reserved.",
        whatsapp: "+62 811-9234-888",
      },
    },
  ],
};

export async function getKultPage(route: string = "/"): Promise<CmsPageData> {
  const deliveryUrl = process.env.CMS_DELIVERY_URL || "http://100.92.245.124:3503";
  const endpoint = `${deliveryUrl.replace(/\/$/, "")}/api/delivery/v1/pages?siteKey=kult-barbershop`;

  try {
    const res = await fetch(endpoint, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.warn(`[CMS] Failed fetching KULT page (${res.status} ${res.statusText}), using fallback.`);
      return FALLBACK_KULT_PAGE;
    }

    const json = await res.json();
    const pages: CmsPageData[] = json?.data || [];
    
    // Find matching route or home page
    const matched = pages.find((p) => p.route === route) || pages.find((p) => p.isHome) || pages[0];
    if (matched) {
      // In case blocks is serialized JSON string
      if (typeof matched.blocks === "string") {
        try {
          matched.blocks = JSON.parse(matched.blocks);
        } catch {
          matched.blocks = [];
        }
      }
      return matched;
    }

    return FALLBACK_KULT_PAGE;
  } catch (err) {
    console.warn(`[CMS] Error connecting to delivery API: ${(err as Error).message}. Returning fallback.`);
    return FALLBACK_KULT_PAGE;
  }
}
