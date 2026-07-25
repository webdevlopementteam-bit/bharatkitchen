import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import CounterSection from "@/sections/CounterSection";
import FAQSection from "@/sections/FAQSection";
import GallerySection from "@/sections/GallerySection";
import Hero from "@/sections/Hero";
import ServicesSection from "@/sections/ServicesSection";
import TestimonialSection from "@/sections/TestimonialSection";
import WorkProcess from "@/sections/WorkProcess";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutSection/>
    <CounterSection/>
    <ServicesSection/>
    <WorkProcess/>
    <GallerySection/>
    <TestimonialSection/>
    <FAQSection/>
    <ContactSection/>
    </>
  );
}
