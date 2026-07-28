import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const YOUTUBE_URL =
  "https://www.youtube.com/@bharatkitchens?app=desktop&ra=m&fbclid=PAZnRzaATVe1ZwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpw2tGYP9mipO1NN1Y7PgNhYupDgDbEEWCMFaNeIKLb91jwql1qnuYOH8i-vX_aem_l-QeSIrA4kDV66H9zsUJog";
const INSTAGRAM_URL = "https://www.instagram.com/bharatkitchens?utm_source=qr";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "#" },
];

const services = [
  { name: "Modular Kitchen", href: "#" },
  { name: "Wardrobes", href: "#" },
  { name: "TV Units", href: "#" },
  { name: "Interior Consultation", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}

          <div>
            <Link href="/" className="flex flex-col">
              <span className="text-3xl font-bold tracking-wide text-white">
                Bharat
              </span>
              <span className="text-xs tracking-[6px] uppercase text-amber-500 font-medium">
           Kitchen
              </span>
            </Link>

            <p className="mt-6 leading-7 max-w-sm">
              Bharat Kitchen designs beautifully crafted modular kitchens,
              wardrobes, TV units and custom interiors that blend luxury,
              functionality and modern aesthetics.
            </p>

            <div className="flex items-center gap-3 mt-6">
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

          {/* Quick Links */}

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 hover:text-amber-500 transition duration-300"
                  >
                    <ChevronRight
                      size={14}
                      className="text-amber-500 group-hover:translate-x-1 transition-transform duration-300"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Our Services
            </h4>

            <ul className="flex flex-col gap-4">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 hover:text-amber-500 transition duration-300"
                  >
                    <ChevronRight
                      size={14}
                      className="text-amber-500 group-hover:translate-x-1 transition-transform duration-300"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Get In Touch
            </h4>

            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href="tel:+919899913144"
                  className="flex items-start gap-3 hover:text-amber-500 transition duration-300"
                >
                  <Phone size={18} className="mt-1 shrink-0" />
                  <span>+91 98999 13144</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:bharatinteriors.ind@gmail.com"
                  className="flex items-start gap-3 hover:text-amber-500 transition duration-300"
                >
                  <Mail size={18} className="mt-1 shrink-0" />
                  <span>bharatinteriors.ind@gmail.com</span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>
                  <strong className="block text-white font-medium">
                    Showroom
                  </strong>
                  A-30, 1st Floor, Mangolpuri Industrial Area, Phase 2,
                  Delhi - 110034
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>
                  <strong className="block text-white font-medium">
                    Factory
                  </strong>
                  A-91 &amp; A-30, Mangolpuri Industrial Area, Phase 2,
                  Pitampura, Delhi - 110034
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Interio Design Studio. All
            rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-500 transition duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-amber-500 transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
