"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const infoCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@interiorstudio.com",
    href: "mailto:info@interiorstudio.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "New Delhi, India",
    href: "https://maps.google.com/?q=New+Delhi,India",
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#F7F2E9] py-20 lg:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-5">
            <div className="w-10 h-[2px] bg-[#C89B53]" />
            <span className="uppercase tracking-[3px] font-semibold text-neutral-700">
              Contact Us
            </span>
            <div className="w-10 h-[2px] bg-[#C89B53]" />
          </div>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-neutral-900">
            Let&apos;s Start Your Project
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-600 text-lg leading-8">
            Have a question or ready to transform your space? Reach out and
            our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}

          <div className="lg:col-span-2 bg-white border border-neutral-200 shadow-sm p-6 md:p-10">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Send Us a Message
            </h3>

            {submitted && (
              <div className="mb-6 flex items-center gap-3 bg-[#C89B53]/10 border border-[#C89B53]/30 text-neutral-800 px-5 py-4">
                <CheckCircle2 className="text-[#C89B53] shrink-0" size={22} />
                <span>
                  Thank you! Your message has been sent — we&apos;ll get back
                  to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border border-neutral-300 px-4 py-3 outline-none focus:border-[#C89B53] transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="border border-neutral-300 px-4 py-3 outline-none focus:border-[#C89B53] transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="phone" className="text-sm font-medium text-neutral-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="border border-neutral-300 px-4 py-3 outline-none focus:border-[#C89B53] transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="border border-neutral-300 px-4 py-3 outline-none focus:border-[#C89B53] transition-colors duration-300 resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#1D1D1D] text-white px-9 py-4 uppercase tracking-[2px] font-semibold hover:bg-[#C89B53] transition duration-300"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* Info + Social */}

          <div className="flex flex-col gap-6">
            {infoCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.icon === MapPin ? "_blank" : undefined}
                  rel={card.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 bg-white border border-neutral-200 shadow-sm px-6 py-5 hover:border-[#C89B53] transition-colors duration-300"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C89B53]/10 border border-[#C89B53]/30 text-[#C89B53]">
                    <Icon size={20} />
                  </span>

                  <div>
                    <div className="text-sm text-neutral-500">
                      {card.label}
                    </div>
                    <div className="font-semibold text-neutral-900">
                      {card.value}
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Social Media */}

            <div className="bg-white border border-neutral-200 shadow-sm px-6 py-5">
              <div className="text-sm text-neutral-500 mb-4">Follow Us</div>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 hover:bg-[#C89B53] hover:border-[#C89B53] hover:text-white transition-all duration-300"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}

        <div className="mt-10 h-[350px] md:h-[420px] w-full overflow-hidden border border-neutral-200 shadow-sm">
          <iframe
            title="Bharat Kitchen Location"
            src="https://www.google.com/maps?q=New+Delhi,India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
