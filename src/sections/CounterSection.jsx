"use client";

import Image from "next/image";
import {
  Award,
  Users,
  MapPinned,
  BriefcaseBusiness,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Award,
    number: "10+",
    title: "Years Experience",
    description:
      "Delivering premium interior solutions with excellence and dedication.",
  },
  {
    id: 2,
    icon: Users,
    number: "1000+",
    title: "Happy Customers",
    description:
      "Successfully transformed thousands of homes and built lasting relationships.",
  },
  {
    id: 3,
    icon: MapPinned,
    number: "100+",
    title: "Cities Served",
    description:
      "Providing quality interiors and services in multiple cities across India.",
  },
  {
    id: 4,
    icon: BriefcaseBusiness,
    number: "7+",
    title: "Interior Services",
    description:
      "Complete home interior solutions under one roof tailored to your needs.",
  },
];

export default function CounterSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-10">
      {/* Background image */}
      <Image
        src="/aboutbgimage.png"
        alt=""
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="md:max-w-7xl mx-auto md:px-6 px-3">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-[#C89B53] uppercase tracking-[4px] text-sm font-semibold">
            Bharat Kitchen
          </span>

          <div className="mt-3 mx-auto h-[2px] w-14 bg-[#C89B53]" />

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#1a1a1a] font-serif">
            Creating Beautiful Interiors
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
            With years of expertise, we design luxurious modular kitchens,
            wardrobes, TV units, and customized interiors that perfectly blend
            functionality with elegance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative rounded-xl md:rounded-2xl bg-white/90 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-3 pb-5 md:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                <div className="mx-auto flex h-11 w-11 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#C89B53]/10 border border-[#C89B53]/30 text-[#C89B53]">
                  <Icon size={20} strokeWidth={1.75} className="md:hidden" />
                  <Icon size={28} strokeWidth={1.75} className="hidden md:block" />
                </div>

                <div className="mt-3 md:mt-5 mx-auto h-[2px] w-6 md:w-8 bg-[#C89B53]" />

                <h3 className="mt-3 md:mt-5 text-xl md:text-4xl font-extrabold text-[#1a1a1a]">
                  {item.number}
                </h3>

                <h4 className="mt-1.5 md:mt-2 text-sm md:text-lg font-semibold text-[#C89B53]">
                  {item.title}
                </h4>

                <p className="mt-2 md:mt-3 text-xs md:text-sm leading-5 md:leading-6 text-gray-600">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-4 right-4 md:left-6 md:right-6 h-1 md:h-1.5 rounded-t-full bg-[#C89B53]/80" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
