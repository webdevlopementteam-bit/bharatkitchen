import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Modular Kitchen",
  "TV Unit Design",
  "Wardrobes",
  "Kitchen Planning",
  "Interior Consultation",
  "Custom Furniture",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F7F2E9] py-10 lg:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          

          <div className="relative">
            <div className="flex items-center gap-4 mb-5">

              <div className="md:hidden w-12 h-[2px] bg-[#C89B53]" />

              <span className="md:hidden uppercase tracking-[3px] font-semibold text-neutral-700">
                About Bharat Kitchen
              </span>

            </div>

            {/* Heading */}

            <h2 className="md:hidden text-3xl font-bold leading-tight text-neutral-900 mb-5">
              Transform Your Home With Premium Interior Designs
            </h2>

            <div className="relative h-[520px] lg:h-[700px] overflow-hidden rounded-sm shadow-2xl">

              <Image
                src="/tvunits/imageone.jpeg"
                alt="Bharat Kitchen Workshop"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* Experience Card */}

            <div className="absolute -bottom-8 -right-5 bg-[#1D1D1D] text-white px-8 py-6 shadow-2xl">

              <h3 className="text-5xl font-bold text-[#C89B53]">
                10+
              </h3>

              <p className="uppercase tracking-[3px] text-sm mt-2">
                Years Experience
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            {/* Small Heading */}

            <div className="flex items-center gap-4 mb-5">

              <div className="hidden md:block w-12 h-[2px] bg-[#C89B53]" />

              <span className="hidden md:block uppercase tracking-[3px] font-semibold text-neutral-700">
                About Bharat Kitchen
              </span>

            </div>

            {/* Heading */}

            <h2 className="hidden md:block text-4xl md:text-5xl xl:text-4xl font-bold leading-tight text-neutral-900">
              Transform Your Home With Premium Interior Designs
            </h2>

            {/* Paragraph */}

            <p className="mt-8 text-lg leading-9 text-neutral-600">
             With 10 years of experience in the furniture manufacturing industry, we take pride in designing and crafting premium-quality Modular Kitchens, TV Units, and Wardrobes* that combine style, functionality, and durability.
            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-600">
              From concept to installation, our experienced team ensures
              exceptional craftsmanship, premium materials and timely delivery,
              making every space elegant, practical and uniquely yours.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-5 mt-10">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 md:gap-3"
                >
                  <CheckCircle2
                    className="text-[#C89B53] flex-shrink-0 w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
                  />

                  <span className="text-sm md:text-lg text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* Button */}

            <div className="mt-12">

              <Link
                href="/about"
                className="inline-flex items-center bg-[#1D1D1D] text-white px-9 py-4 uppercase tracking-[2px] font-semibold hover:bg-[#C89B53] transition duration-300"
              >
                Discover More
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}