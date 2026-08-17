import {
  Handshake,
  MessagesSquare,
  PencilRuler,
  Hammer,
} from "lucide-react";

const process = [
  {
    id: "01",
    title: "Consultation",
    icon: Handshake,
    description:
      "Understand your lifestyle, space and design preferences to create the perfect plan.",
  },
  
  {
    id: "02",
    title: "3D Design & Approval",
    icon: PencilRuler,
    description:
      "Prepare realistic 3D designs so you can visualize your dream interiors before work starts.",
  },
  {
    id: "03",
    title: "Manufacturing",
    icon: Hammer,
    description:
      "Precision manufacturing with premium materials.",
  },
  {
    id: "04",
    title: "Installation",
    icon: MessagesSquare,
    description:
      "Our process is finalized with expert installation.",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative overflow-hidden bg-[#F8F3EB] pb-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <div className="flex justify-center items-center gap-5">

            <div className="w-10 h-[2px] bg-[#C89B53]" />

            <span className="uppercase tracking-[3px] font-semibold text-neutral-700">
              How We Work
            </span>

            <div className="w-10 h-[2px] bg-[#C89B53]" />

          </div>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900">
            Our Work Process
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-600 text-lg leading-8">
            We follow a simple and transparent process that transforms your
            dream interiors into reality with perfection.
          </p>

        </div>

        {/* Process Cards */}

        <div className="mt-10 md:mt-20 grid grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10">

          {process.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group text-center"
              >
                {/* Circle */}

                <div className="relative mx-auto flex h-24 w-24 md:h-44 md:w-44 items-center justify-center rounded-full border-2 border-neutral-300 bg-white transition-all duration-500 group-hover:border-[#C89B53] group-hover:shadow-xl">

                  <Icon
                    size={30}
                    className="text-[#C89B53] md:hidden"
                  />
                  <Icon
                    size={58}
                    className="text-[#C89B53] hidden md:block"
                  />

                  {/* Number */}

                  <div className="absolute bottom-1 right-1 md:bottom-3 md:right-3 flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-neutral-900 text-white text-xs md:text-2xl font-bold transition duration-300 group-hover:bg-[#C89B53]">
                    {item.id}
                  </div>

                </div>

                {/* Title */}

                <h3 className="mt-4 md:mt-10 text-base md:text-2xl font-bold text-neutral-900">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-2 md:mt-5 text-xs md:text-base leading-5 md:leading-8 text-neutral-600">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}