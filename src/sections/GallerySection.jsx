"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

const categories = [
  {
    key: "kitchen",
    label: "Modular Kitchen",
    images: [
      { src: "/modularkitchen/imageone.jpeg", width: 1194, height: 1600 },
      { src: "/modularkitchen/imagetwo.jpeg", width: 916, height: 1600 },
      { src: "/modularkitchen/imagethree.jpeg", width: 720, height: 1280 },
    ],
  },
  {
    key: "wardrobes",
    label: "Wardrobes",
    images: [
      { src: "/wardrobes/imageone.jpeg", width: 1024, height: 1024 },
      { src: "/wardrobes/imagetwo.jpeg", width: 1200, height: 1200 },
      { src: "/wardrobes/imagethree.jpeg", width: 1200, height: 1200 },
      { src: "/wardrobes/imagefour.jpeg", width: 736, height: 736 },
      { src: "/wardrobes/imagefive.jpeg", width: 640, height: 800 },
      { src: "/wardrobes/imagesix.jpeg", width: 800, height: 800 },
    ],
  },
  {
    key: "tv-units",
    label: "TV Units",
    images: [
      { src: "/tvunits/imageone.jpeg", width: 736, height: 1104 },
      { src: "/tvunits/imagetwo.jpeg", width: 736, height: 805 },
      { src: "/tvunits/imagethree.jpeg", width: 900, height: 1600 },
      { src: "/tvunits/imagefour.jpeg", width: 864, height: 1152 },
    ],
  },
];

const filters = [{ key: "all", label: "All" }, ...categories.map((c) => ({ key: c.key, label: c.label }))];

const allImages = categories.flatMap((c) =>
  c.images.map((img, i) => ({
    ...img,
    category: c.label,
    categoryKey: c.key,
    id: `${c.key}-${i}`,
  }))
);

function useColumnCount() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCount(2);
      else if (w < 1024) setCount(3);
      else setCount(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

function distributeIntoColumns(images, columnCount) {
  const columns = Array.from({ length: columnCount }, () => []);
  const heights = Array(columnCount).fill(0);

  images.forEach((img) => {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(img);
    heights[shortest] += img.height / img.width;
  });

  return columns;
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const columnCount = useColumnCount();

  const images =
    activeFilter === "all"
      ? allImages
      : allImages.filter((img) => img.categoryKey === activeFilter);

  const columns = distributeIntoColumns(images, columnCount);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setLightboxIndex((i) => (i + 1) % images.length);

  const active = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <section id="gallery" className="bg-[#F8F3EB] pt-10 pb-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-5">
            <div className="w-10 h-[2px] bg-[#C89B53]" />
            <span className="uppercase tracking-[3px] font-semibold text-neutral-700">
              Gallery
            </span>
            <div className="w-10 h-[2px] bg-[#C89B53]" />
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-neutral-900">
            Our Recent Work
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-600 text-lg leading-8">
            A closer look at our modular kitchens, wardrobes and TV units
            crafted for homes across India.
          </p>
        </div>

        {/* Filters */}

        <div className="mb-12 flex justify-center">
          <div className="flex flex-nowrap gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 -mx-6 sm:px-0 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((f) => {
              const isActive = f.key === activeFilter;

              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`shrink-0 snap-start rounded-full px-6 py-2.5 text-sm font-semibold border transition-all duration-300 ${
                    isActive
                      ? "bg-[#1D1D1D] border-[#1D1D1D] text-white"
                      : "bg-white border-neutral-200 text-neutral-700 hover:border-[#C89B53] hover:text-[#C89B53]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}

        <div className="flex gap-4 md:gap-5">
          {columns.map((col, ci) => (
            <div key={ci} className="flex-1 min-w-0 flex flex-col gap-4 md:gap-5">
              {col.map((img) => {
                const i = images.indexOf(img);

                return (
                  <button
                    key={img.id}
                    onClick={() => openLightbox(i)}
                    className="group relative block w-full overflow-hidden shadow-sm"
                  >
                    <Image
                      src={img.src}
                      alt={img.category}
                      width={img.width}
                      height={img.height}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <Expand size={22} className="text-white" />
                      <span className="text-white text-sm font-medium">
                        {img.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}

      {active && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center px-4">
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#C89B53] hover:border-[#C89B53] transition-all duration-300"
          >
            <X size={22} />
          </button>

          <button
            onClick={showPrev}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#C89B53] hover:border-[#C89B53] transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image
              src={active.src}
              alt={active.category}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-4 md:right-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#C89B53] hover:border-[#C89B53] transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-300 text-sm">
            {active.category} &middot; {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </section>
  );
}
