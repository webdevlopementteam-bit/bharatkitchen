"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Users, MapPinned } from "lucide-react";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: MapPinned, value: "Pan-India", label: "Project Delivery" },
];

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner, New Delhi",
    initials: "RK",
    avatarBg: "bg-amber-100",
    platform: FaFacebookF,
    platformColor: "text-blue-600",
    text: "Bharat Kitchen transformed our old kitchen into a stunning modular space. The team was professional, punctual and the finish quality is outstanding.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Homeowner, Gurugram",
    initials: "PS",
    avatarBg: "bg-pink-100",
    platform: FaInstagram,
    platformColor: "text-pink-600",
    text: "Our wardrobe design is exactly what we envisioned - spacious, elegant and perfectly functional. Loved working with their design team.",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Institutional Buyer",
    initials: "AV",
    avatarBg: "bg-blue-100",
    platform: FaGoogle,
    platformColor: "text-red-500",
    text: "Their commitment to quality and timely delivery makes them a truly trusted partner. Highly recommend for bulk institutional requirements.",
  },
  {
    id: 4,
    name: "Sanjay Gupta",
    role: "Homeowner, Noida",
    initials: "SG",
    avatarBg: "bg-emerald-100",
    platform: FaFacebookF,
    platformColor: "text-blue-600",
    text: "The TV unit they designed has become the centerpiece of our living room. Great attention to detail and finished well within the timeline.",
  },
  {
    id: 5,
    name: "Neha Kapoor",
    role: "Homeowner, Faridabad",
    initials: "NK",
    avatarBg: "bg-purple-100",
    platform: FaInstagram,
    platformColor: "text-pink-600",
    text: "Excellent craftsmanship and honest pricing. They understood our requirements perfectly and delivered a premium yet practical interior.",
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "Retail Partner",
    initials: "VS",
    avatarBg: "bg-rose-100",
    platform: FaGoogle,
    platformColor: "text-red-500",
    text: "Working with Bharat Kitchen has been a wonderful experience. They have excellent designs and their support team is very responsive.",
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef(null);

  const scrollByCard = (dir = 1) => {
    const el = scrollRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card]");
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : 320;

    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-10 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900">
            What Our <span className="text-[#C89B53]">Clients</span> Say
          </h2>

          <p className="mt-4 text-neutral-600 text-lg">
            Trusted by homeowners and businesses for premium interiors across
            India.
          </p>
        </div>

        {/* Stats */}

        <div className="flex flex-nowrap sm:flex-wrap justify-center gap-2 sm:gap-4 mb-14">
          {stats.map((s) => {
            const Icon = s.icon;

            return (
              <div
                key={s.label}
                className="flex flex-1 sm:flex-none min-w-0 flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left border border-neutral-200 rounded-2xl px-2 py-3 sm:px-6 sm:py-4 shadow-sm"
              >
                <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B53]/10 text-[#C89B53]">
                  <Icon size={18} className="sm:hidden" />
                  <Icon size={20} className="hidden sm:block" />
                </span>

                <div className="min-w-0">
                  <div className="font-bold text-neutral-900 text-sm sm:text-lg leading-none whitespace-nowrap">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-sm text-neutral-500 mt-1 whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel */}

        <div className="relative">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Previous testimonials"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-md hover:bg-[#C89B53] hover:text-white hover:border-[#C89B53] transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => {
              const Platform = t.platform;

              return (
                <div
                  data-card
                  key={t.id}
                  className="group snap-start shrink-0 w-[85%] sm:w-[340px] rounded-2xl border border-neutral-200 hover:border-[#C89B53] bg-white p-7 shadow-sm transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold text-neutral-800 ${t.avatarBg}`}
                      >
                        {t.initials}
                      </span>

                      <div>
                        <h4 className="font-semibold text-neutral-900">
                          {t.name}
                        </h4>
                        <span className="text-sm text-neutral-500">
                          {t.role}
                        </span>
                      </div>
                    </div>

                    <Platform className={t.platformColor} size={20} />
                  </div>

                  <div className="flex gap-1 mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#C89B53] text-[#C89B53]"
                      />
                    ))}
                  </div>

                  <div className="mt-4 border-t border-dashed border-neutral-200 pt-4 relative">
                    <span className="absolute -top-1 left-0 text-4xl text-[#C89B53]/25 font-serif leading-none">
                      &ldquo;
                    </span>
                    <p className="text-neutral-600 leading-7 text-[15px]">
                      {t.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => scrollByCard(1)}
            aria-label="Next testimonials"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-md hover:bg-[#C89B53] hover:text-white hover:border-[#C89B53] transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
