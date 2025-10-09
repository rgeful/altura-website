import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh]">
      <div className="absolute inset-0 -z-10">
        <Image src="/hero-bg.jpg" alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
      </div>

      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mx-auto max-w-4xl text-balance font-heading text-5xl md:text-7xl">
          Modern Solutions for Small Businesses
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Building modern websites and automation tools. Elevate your business to the next level.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-5 py-3 text-base font-medium text-black transition hover:bg-white/70"
          >
            Let's Elevate
          </Link>
        </div>
      </div>
    </section>
  );
}