import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "NgureTech delivered a full digital platform in weeks. The team was proactive, transparent, and genuinely cared about our outcomes.",
    name: "Kariuki Mwangi",
    role: "CEO, Apex Logistics",
  },
  {
    quote:
      "Our customer portal is now a growth engine. The UI is polished, the codebase is clean, and the launch was smooth.",
    name: "Diana Muthoni",
    role: "Head of Operations, Arise Fintech",
  },
  {
    quote:
      "We finally have a tech partner that understands both design and scalability. The mobile app is fast and delightful.",
    name: "Peter Njoroge",
    role: "Founder, MarketFlow",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-transparent py-10">
      <div className="absolute inset-0">
        {["/assets/bg-5.jpg", "/assets/bg-3.jpg", "/assets/bg-1.jpg"].map((image, idx) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: idx * 6 }}
          />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-[#e2e7e5] bg-white/65 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[#00A859]">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#0a2016] sm:text-4xl">
            Trusted by ambitious teams
          </h2>

          <div className="relative mt-6 overflow-hidden rounded-3xl border border-[#e6ecea] bg-[#f4f6f5] p-6">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#00A859]/10 text-[#00A859]">
              <FaQuoteLeft />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg text-[#244034]">“{testimonials[index].quote}”</p>
                <p className="mt-6 text-sm font-semibold text-[#0a2016]">
                  {testimonials[index].name}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#00A859]">
                  {testimonials[index].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
