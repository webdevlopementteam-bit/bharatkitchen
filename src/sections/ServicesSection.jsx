"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChefHat,
  DoorClosed,
  Tv,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    icon: ChefHat,
    gallery: [
      "/modularkitchen/imageone.jpeg",
      "/modularkitchen/imagetwo.jpeg",
      "/modularkitchen/imagethree.jpeg",
    ],
    description:
      "Smart, stylish and functional modular kitchens designed around the way you cook and live. We blend premium materials with efficient layouts to give you a kitchen that's as beautiful as it is practical.",
    features: [
      "L-Shape, U-Shape & Parallel layouts",
      "Premium marine plywood carcass",
      "Soft-close hinges & drawers",
      "Customized storage solutions",
      "Anti-scratch laminate finishes",
      "Integrated chimney & hob setup",
    ],
  },
  {
    id: "wardrobes",
    title: "Wardrobes",
    icon: DoorClosed,
    gallery: [
      "/wardrobes/imageone.jpeg",
      "/wardrobes/imagetwo.jpeg",
      "/wardrobes/imagethree.jpeg",
    ],
    description:
      "Elegant, spacious wardrobes tailored to your room and storage needs. From sliding shutters to walk-in closets, we design wardrobes that keep everything organized without compromising on style.",
    features: [
      "Sliding & hinged shutter options",
      "Walk-in wardrobe designs",
      "Mirror & glass shutter finishes",
      "Modular internal storage",
      "Loft & drawer combinations",
      "Termite-proof materials",
    ],
  },
  {
    id: "tv-units",
    title: "TV Units",
    icon: Tv,
    gallery: [
      "/tvunits/imageone.jpeg",
      "/tvunits/imagetwo.jpeg",
      "/tvunits/imagethree.jpeg",
    ],
    description:
      "Contemporary TV units and entertainment walls that become the centerpiece of your living room. We combine clean lines, ambient lighting and smart storage for a truly elevated viewing space.",
    features: [
      "Wall-mounted & floor-standing units",
      "Ambient LED panel lighting",
      "Hidden cable management",
      "Custom entertainment storage",
      "Textured & veneer finishes",
      "Space-saving compact designs",
    ],
  },
];

function ServiceMedia({ title, images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div>
      <div className="relative h-[280px] md:h-[380px] overflow-hidden rounded-sm shadow-2xl">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={title}
            fill
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className={`relative h-20 md:h-24 overflow-hidden rounded-sm border-2 transition-all duration-300 ${
              i === index
                ? "border-[#C89B53]"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={src} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId);
  const ActiveIcon = active.icon;

  return (
    <section id="services" className="bg-[#F7F2E9] py-10 lg:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-5">
            <div className="w-10 h-[2px] bg-[#C89B53]" />
            <span className="uppercase tracking-[3px] font-semibold text-neutral-700">
              Our Services
            </span>
            <div className="w-10 h-[2px] bg-[#C89B53]" />
          </div>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-neutral-900">
            What We Craft For You
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-600 text-lg leading-8">
            Select a service to explore how we bring it to life with premium
            craftsmanship and thoughtful design.
          </p>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
          {/* Left: Service List */}

          <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-col lg:gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeId;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`group flex flex-col items-center gap-2 text-center px-2 py-3 lg:flex-row lg:items-center lg:gap-4 lg:text-left lg:w-full lg:px-6 lg:py-5 border transition-all duration-300 ${
                    isActive
                      ? "bg-[#C89B53] border-[#C89B53]"
                      : "bg-white border-neutral-200 hover:border-[#C89B53]/60 hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isActive
                        ? "border-white bg-white text-[#C89B53]"
                        : "border-neutral-200 text-[#C89B53] group-hover:border-[#C89B53]"
                    }`}
                  >
                    <Icon size={16} className="lg:hidden" />
                    <Icon size={22} className="hidden lg:block" />
                  </span>

                  <span
                    className={`font-semibold text-xs leading-tight lg:text-base lg:whitespace-nowrap ${
                      isActive ? "text-[#1D1D1D]" : "text-neutral-900"
                    }`}
                  >
                    {service.title}
                  </span>

                  <ArrowRight
                    size={18}
                    className={`ml-auto hidden lg:block transition-transform duration-300 ${
                      isActive
                        ? "text-[#1D1D1D] translate-x-0"
                        : "text-neutral-400 -translate-x-1 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Service Detail */}

          <div
            key={active.id}
            className="grid md:grid-cols-2 gap-10 items-center bg-white border border-neutral-200 shadow-sm p-6 md:p-10"
          >
            <ServiceMedia
              key={active.id}
              title={active.title}
              images={active.gallery}
            />

            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C89B53]/10 border border-[#C89B53]/30 text-[#C89B53]">
                <ActiveIcon size={26} />
              </span>

              <h3 className="mt-6 text-3xl font-bold text-neutral-900">
                {active.title}
              </h3>

              <p className="mt-4 text-neutral-600 leading-8">
                {active.description}
              </p>

              <div className="mt-8 grid gap-4">
                {active.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-[#C89B53] flex-shrink-0"
                      size={20}
                    />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center bg-[#1D1D1D] text-white px-8 py-4 uppercase tracking-[2px] font-semibold hover:bg-[#C89B53] transition duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
