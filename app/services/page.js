"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const servicesData = [
  {
    id: "web-design",
    title: "Web Design",
    image: "/web-dev.png",
    imageSize: { width: 200, height: 200 },
    shortDesc: "Sleek, responsive websites built with modern frameworks like Next.js and Tailwind. Designed to impress and convert visitors.",
    detailedDesc: "We create stunning, high-performance websites tailored to your brand and business goals. Our designs are mobile-first, SEO-optimized, and built using cutting-edge technologies like Next.js, React, and Tailwind CSS. Every site includes responsive design, accessibility features, performance optimization, and seamless integrations with your existing tools. Whether you need a simple landing page or a more complex website, we got you covered.",
    price: "Starting at $499"
  },
  {
    id: "automation",
    title: "Automation Tools",
    image: "/automation-tools.png",
    imageSize: { width: 200, height: 200 },
    shortDesc: "Save time and streamline your business with AI-powered automations, integrations, and smart workflows custom-built for your needs.",
    detailedDesc: (
      <div>
        <p className="mb-4">Transform repetitive tasks into automated workflows that run 24/7. Our custom automation tools integrate with your existing software stack to handle data entry, report generation, email campaigns, etc. The current automation tools we offer are listed below: </p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Contact/Quote Form Automation:</strong> Instantly sends new inquiries to your email or phone.</li>
          <li><strong>Appointment Booking System:</strong> Online scheduling synced with Google Calendar.</li>
          <li><strong>Review & Follow-Up Automation:</strong> Sends post-service review requests via text/email.</li>
        </ul>
      </div>
    ),
    price: "$99 per tool"
  },
  {
    id: "ai-assistant",
    title: "AI Business Assistant",
    image: "/ai-agent.png",
    imageSize: { width: 125, height: 125 },
    shortDesc: "Custom-built chatbots and intelligent agents that can handle customer support, scheduling, and lead generation — available 24/7.",
    detailedDesc: "Deploy your own AI-powered business assistant that handles customer inquiries, books appointments, qualifies leads, and provides instant support around the clock. Our AI agents are trained on your specific business data and can integrate with your CRM, calendar, and communication platforms. They understand context, maintain conversation history, and escalate complex issues to your team when needed. Perfect for reducing response times, capturing more leads, and providing consistent customer experiences at scale.",
    price: "$49 per month"
  }
];

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    document.title = "Services | Altura";
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] transition-all duration-300 cursor-pointer"
              onClick={() => toggleExpand(service.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-6 flex justify-center">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={service.imageSize.width} 
                  height={service.imageSize.height} 
                  className="object-contain" 
                />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-heading mb-4 text-white">
                {service.title}
              </h2>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {service.shortDesc}
              </p>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/20 pt-6 mb-6">
                      <div className="text-gray-200 text-sm leading-relaxed text-left">
                        {typeof service.detailedDesc === 'string' ? (
                          <p>{service.detailedDesc}</p>
                        ) : (
                          service.detailedDesc
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <p className="text-xl font-heading text-white/90">
                {service.price}
              </p>

              <div className="mt-4 text-xs text-purple-400">
                {expandedId === service.id ? "Click to collapse" : "Click to expand"}
              </div>
            </motion.div>
          ))}
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
