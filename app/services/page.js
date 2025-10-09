import Image from "next/image";

export default function Services() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden">
    
      <div className="absolute inset-0 -z-10">
        <Image src="/hero-bg.jpg" alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
      </div>

      <div className="relative w-full max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-heading mb-12 text-white tracking-tight">
          Our Services
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-heading mb-4 text-white">
            Web Design
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Sleek, responsive websites built with modern frameworks like
            Next.js and Tailwind.  Designed to impress and convert visitors.
          </p>
          <p className="text-xl font-heading text-white/90">Starting at $499</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-heading mb-4 text-white">
            Automation Tools
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Save time and streamline your business with AI-powered automations,
            integrations, and smart workflows custom-built for your needs.
          </p>
          <p className="text-xl font-heading text-white/90">$99 per tool</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-heading mb-4 text-white">
            AI Business Assistant
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Custom-built chatbots and intelligent agents that can handle customer
            support, scheduling, and lead generation — available 24/7.
          </p>
          <p className="text-xl font-heading text-white/90">$49 per month</p>
        </div>
      </div>

        <div className="mt-16">
          <a
            href="/contact"
            className="inline-block rounded-xl bg-white text-black px-6 py-3 text-lg font-medium tracking-wide hover:bg-white/70 transition"
          >
            Ready?
          </a>
        </div>
      </div>
    </section>
  );
}
