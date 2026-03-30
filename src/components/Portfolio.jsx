import { motion } from "framer-motion";
import { fadeUp, stagger } from "../utils/animations";

const projects = [
  {
    title: "Campus Registration System",
    tag: "Web Platform",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "E-commerce System (Final Project)",
    tag: "Full Stack",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Zetech University E-commerce",
    tag: "Web Storefront",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Freelancing & Writing Website",
    tag: "Content Platform",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-transparent py-10">
      <div className="absolute inset-0">
        {["/assets/bg-2.jpg", "/assets/bg-4.jpg", "/assets/bg-5.jpg"].map((image, idx) => (
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
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold text-[#0a2016] sm:text-4xl"
            >
              Featured work that drives results
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-[#e6ecea] bg-[#f4f6f5]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#00A859]">
                    {project.tag}
                  </p>
                  <h3 className="text-xl font-semibold text-[#0a2016]">{project.title}</h3>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-6 bottom-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#0a2016]">
                  View case study
                </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
