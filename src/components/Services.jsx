import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCogs, FaCamera, FaVideo } from "react-icons/fa";
import { fadeUp, stagger } from "../utils/animations";

const services = [
  {
    title: "Web Development",
    description: "High-performance websites with modern UX, SEO, and conversion-first design.",
    icon: FaLaptopCode,
  },
  {
    title: "Mobile Apps",
    description: "iOS and Android apps engineered for speed, usability, and scale.",
    icon: FaMobileAlt,
  },
  {
    title: "Custom Software",
    description: "Tailor-made platforms, dashboards, and integrations to streamline operations.",
    icon: FaCogs,
  },
  {
    title: "Photography",
    description: "Professional photography that captures products, teams, and stories with clarity.",
    icon: FaCamera,
  },
  {
    title: "Videography",
    description: "Cinematic video production for brand launches, campaigns, and storytelling.",
    icon: FaVideo,
  },
];

export default function Services({ onScrollTo }) {
  return (
    <section id="services" className="relative overflow-hidden bg-transparent py-10">
      <div className="absolute inset-0">
        {["/assets/bg-1.jpg", "/assets/bg-2.jpg", "/assets/bg-3.jpg"].map((image, idx) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: idx * 6 }}
          />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-[#e2e7e5] bg-white/65 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-6"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-[#00A859]">
              Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold text-[#0a2016] sm:text-4xl"
            >
              Crafted solutions for modern businesses
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon }) => {
              const isPortfolioLink = [
                "Web Development",
                "Mobile Apps",
                "Custom Software",
              ].includes(title);
              const target = isPortfolioLink ? "portfolio" : "media";

              return (
              <motion.div
                key={title}
                className="group rounded-2xl border border-[#e6ecea] bg-[#f4f6f5] p-6 transition-all hover:-translate-y-1 hover:border-[#00A859]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00A859]/10 text-[#00A859]">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[#0a2016]">{title}</h3>
                <p className="text-sm text-[#4c6b5a]">{description}</p>
                <button
                  type="button"
                  onClick={() => onScrollTo?.(target)}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00A859] transition hover:text-[#01924f]"
                >
                  View {isPortfolioLink ? "Portfolio" : "Gallery"}
                </button>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
