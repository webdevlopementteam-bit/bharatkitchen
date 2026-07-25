import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Desktop Banner */}
      <div className="relative hidden md:block w-full h-[640px]">
        <Image
          src="/bannerd.webp"
          alt="Bharat Kitchen Interior Design"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile Banner */}
      <div className="relative block md:hidden w-full aspect-[4/5]">
        <Image
          src="/bannerm.webp"
          alt="Bharat Kitchen Interior Design"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}