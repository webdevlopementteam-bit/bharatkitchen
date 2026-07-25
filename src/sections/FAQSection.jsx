"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What areas do you provide interior design services in?",
    answer:
      "We currently serve 100+ cities across India, including New Delhi, Gurugram, Noida and Faridabad. Reach out to us to check availability in your city.",
  },
  {
    question: "How long does a typical modular kitchen project take?",
    answer:
      "Most modular kitchen projects are completed within 20-30 days from design approval, depending on the size and customization involved.",
  },
  {
    question: "Do you provide free 3D design consultation?",
    answer:
      "Yes, we offer a free initial consultation along with a realistic 3D design so you can visualize your space before any work begins.",
  },
  {
    question: "What materials do you use for wardrobes and kitchens?",
    answer:
      "We use premium marine plywood, anti-scratch laminates and branded hardware with soft-close hinges to ensure durability and a long-lasting finish.",
  },
  {
    question: "Is there a warranty on the work done?",
    answer:
      "Yes, all our modular kitchens, wardrobes and TV units come with a standard warranty covering manufacturing defects and hardware.",
  },
  {
    question: "Can I customize the design according to my space?",
    answer:
      "Absolutely. Every project is tailored to your room dimensions, lifestyle and preferences, from layout to finishes and storage solutions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="bg-white py-10 lg:py-28">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-5">
            <div className="w-10 h-[2px] bg-[#C89B53]" />
            <span className="uppercase tracking-[3px] font-semibold text-neutral-700">
              FAQ
            </span>
            <div className="w-10 h-[2px] bg-[#C89B53]" />
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-neutral-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-600 text-lg leading-8">
            Answers to the questions we get asked the most about our
            interior design process.
          </p>
        </div>

        {/* Accordion */}

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.question}
                className={`border transition-colors duration-300 ${
                  isOpen ? "border-[#C89B53]" : "border-neutral-200"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`font-semibold text-lg ${
                      isOpen ? "text-[#C89B53]" : "text-neutral-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <Plus
                    size={22}
                    className={`shrink-0 text-[#C89B53] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-neutral-600 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
