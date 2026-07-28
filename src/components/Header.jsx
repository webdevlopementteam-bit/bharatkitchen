"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const YOUTUBE_URL =
  "https://www.youtube.com/@bharatkitchens?app=desktop&ra=m&fbclid=PAZnRzaATVe1ZwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpw2tGYP9mipO1NN1Y7PgNhYupDgDbEEWCMFaNeIKLb91jwql1qnuYOH8i-vX_aem_l-QeSIrA4kDV66H9zsUJog";
const INSTAGRAM_URL = "https://www.instagram.com/bharatkitchens?utm_source=qr";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },

  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ========================= TOPBAR ========================= */}

      <div className="hidden lg:block bg-neutral-950 text-gray-300 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="h-12 flex items-center justify-between">

            {/* Left */}

            <div className="flex items-center gap-8">

              <a
                href="tel:+919899913144"
                className="flex items-center gap-2 text-sm hover:text-amber-400 transition"
              >
                <Phone size={15} />
                <span>+91 98999 13144</span>
              </a>

              <a
                href="mailto:bharatinteriors.ind@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-amber-400 transition"
              >
                <Mail size={15} />
                <span>bharatinteriors.ind@gmail.com</span>
              </a>

              <div className="flex items-center gap-2 text-sm">
                <MapPin size={15} />
                <span>Mangolpuri, Delhi</span>
              </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-3">

              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300"
              >
                <FaYoutube size={15} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn size={14} />
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* ========================= NAVBAR ========================= */}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <Link href="/" className="flex flex-col">

           <img src="/logo.png" className="h-20 w-full"></img>

            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative font-medium text-[15px] text-neutral-700 transition duration-300 hover:text-amber-600 group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>

                </Link>
              ))}

            </nav>

            {/* CTA */}

            <div className="hidden lg:flex">

              <Link
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-neutral-900 text-white px-7 py-3 font-medium hover:bg-amber-500 transition-all duration-300"
              >
                Free Consultation

                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-neutral-900"
            >
              {mobileMenu ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>

        {/* ================= Mobile Menu ================= */}

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileMenu ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t">

            <div className="px-6 py-6 flex flex-col">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="py-4 border-b text-neutral-700 hover:text-amber-600 transition"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="mt-6 bg-neutral-900 text-white text-center rounded-full py-3 hover:bg-amber-500 transition"
              >
                Free Consultation
              </Link>

              {/* Mobile Contact */}

              <div className="mt-8 space-y-4 border-t pt-6">

                <a
                  href="tel:+919899913144"
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <Phone size={18} />
                  +91 98999 13144
                </a>

                <a
                  href="mailto:bharatinteriors.ind@gmail.com"
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <Mail size={18} />
                  bharatinteriors.ind@gmail.com
                </a>

                <div className="flex items-center gap-3 text-neutral-700">
                  <MapPin size={18} />
                  Mangolpuri, Delhi
                </div>

              </div>

              {/* Mobile Social */}

              <div className="flex items-center gap-4 mt-8">

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-amber-500 transition"
                >
                  <FaFacebookF size={15} />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-amber-500 transition"
                >
                  <FaInstagram size={16} />
                </a>

                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-amber-500 transition"
                >
                  <FaYoutube size={16} />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-amber-500 transition"
                >
                  <FaLinkedinIn size={15} />
                </a>

              </div>

            </div>

          </div>
        </div>

      </header>
    </>
  );
}