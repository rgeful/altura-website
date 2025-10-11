"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    social: "",
    details: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.title = "Contact | Altura";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          email: formData.email,
          phone: formData.phone,
          instagram: formData.social,
          details: formData.details,
        }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          business: "",
          email: "",
          phone: "",
          social: "",
          details: "",
        });
      } else {
        setStatus("Something went wrong. Try again later.");
      }
    } catch {
      setStatus("Network error. Try again.");
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
              <Image src="/hero-bg.jpg" alt="" fill sizes="100vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
            </div>

      <div className="relative w-full max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-heading mb-12 text-white tracking-tight text-center">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <div>
            <label className="block text-gray-300 mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-black/50 border border-white/20 p-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm font-medium">
              Business Name
            </label>
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              className="w-full rounded-lg bg-black/50 border border-white/20 p-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
              placeholder="Business Name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm font-medium">
              Email (Prefence)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-black/50 border border-white/20 p-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm font-medium">
              Phone Number (Preference)
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg bg-black/50 border border-white/20 p-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm font-medium">
              Social Media
            </label>
            <input
              type="text"
              name="social"
              value={formData.social}
              onChange={handleChange}
              className="w-full rounded-lg bg-black/50 border border-white/20 p-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
              placeholder="@yourbusiness or Instagram link"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm font-medium">
              What service(s) are you interested in?
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={5}
              required
              className="w-full rounded-lg bg-black/50 border border-white/20 p-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
              placeholder="Example: Landing page + AI business assistant"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white text-black font-medium py-3 hover:bg-white/70 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm text-gray-400 mt-4 text-center">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
