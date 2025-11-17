"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Sleek, responsive websites built with Next.js and Tailwind to impress visitors and convert leads.",
    details:
      "Every build includes conversion-focused layouts, lightning performance, accessibility checks, and SEO optimization so launches happen fast and stress-free. Whether you want a simple landing page or a full-fledged website, we've got you covered.",
    image: "/web-dev.svg",
    imageSize: { width: 200, height: 200 },
    price: "Starting at $399",
  },
  {
    id: "automation",
    title: "Automation Tools",
    description:
      "Custom automations, integrations, and smart workflows that save hours every week.",
    details: [
      "Appointment booking systems synced with Google Calendar.",
      "Contact and quote forms that route leads straight to your inbox or CRM.",
      "Automated follow-ups via email or SMS so you never miss a lead.",
    ],
    image: "/automation-tools.svg",
    imageSize: { width: 200, height: 200 },
    price: "$99 per tool",
  },
];

export default function HeroSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = services[activeServiceIndex];

  const goToNextService = () => {
    setActiveServiceIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <>
      <section className="relative w-full min-h-screen md:h-[100vh]">
        <div className="absolute inset-0 -z-10 bg-black" />

        <div className="mx-auto flex h-auto max-w-7xl flex-col items-center justify-start gap-4 px-6 pb-6 pt-2 text-center md:h-full md:flex-row md:items-center md:justify-center md:gap-12 md:pb-0 md:pt-0 md:text-left">
          <div className="order-2 flex-1 md:order-1">
            <h1 className="mx-auto max-w-4xl text-balance font-heading text-5xl md:text-7xl">
              Modern Solutions for Small Businesses
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Building modern websites and automation tools. Elevate your business to the next level.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-white px-5 py-3 text-base font-medium text-black transition hover:bg-white/70"
              >
                Let's Elevate
              </Link>
            </div>
          </div>

          <div className="order-1 flex-1 md:order-2">
            <div className="relative mx-auto w-full translate-x-4 md:translate-x-0 md:mx-0 md:ml-10 md:max-w-3xl lg:max-w-4xl">
              <Image src="/rocket.png" alt="Rocket launch" width={2400} height={1350} className="w-full rounded-2xl" priority />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-black/70 via-transparent to-black/70" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-black px-6 pb-24 pt-12 text-white md:pb-28 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mt-3 font-heading text-4xl md:text-5xl">Our services cover your needs</h2>
            <p className="mt-4 text-gray-300">
              Everything we build is fast, automated, and integrated so you can focus on running the business.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 grid-cols-1 sm:grid-cols-2 justify-items-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex h-full w-full max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={service.imageSize.width}
                    height={service.imageSize.height}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-heading text-white">{service.title}</h3>
                <p className="mt-4 flex-1 text-base text-gray-300">{service.description}</p>
                <p className="mt-6 text-lg font-semibold text-white">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-28 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
              <Image src="/wevdev.avif" alt="Service case study" width={1600} height={900} className="h-full w-full object-cover" priority />
            </div>
          </div>
          <div className="flex-1 text-left">
            <h3 className="mt-4 text-3xl font-heading md:text-4xl">{activeService.title}</h3>
            <p className="mt-4 text-base text-gray-300">Bring your business to life online.</p>
            {Array.isArray(activeService.details) ? (
              <ul className="mt-4 space-y-3 text-base text-gray-400">
                {activeService.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-lg text-white">-</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-base text-gray-400">{activeService.details}</p>
            )}
            <button
              onClick={goToNextService}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-white/40 hover:text-white"
            >
             Next <span className="text-xl">›</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h3 className="mt-4 text-4xl font-heading md:text-5xl">Ready to launch something great?</h3>
          <p className="mt-4 text-lg text-gray-300">
            Tell us what you’re building and we’ll turn it into a polished, automated experience built for scale.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-2xl bg-white px-6 py-3 text-base text-black transition hover:bg-white/80"
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}