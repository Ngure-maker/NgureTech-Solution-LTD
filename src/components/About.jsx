import { motion } from "framer-motion";
import { fadeUp, stagger } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-transparent py-10 text-[#0a2016]">
      <div className="absolute inset-0">
        {["/assets/bg-4.jpg", "/assets/bg-5.jpg", "/assets/bg-2.jpg"].map((image, idx) => (
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
        <div className="grid gap-8 rounded-3xl border border-[#e2e7e5] bg-white/65 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-[#00A859]">
            About Us
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
          >
            A partner for teams who want to move faster with confidence
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-base text-[#4c6b5a]">
            NgureTech Solutions LTD blends strategy, engineering, and design to deliver products that scale. We
            collaborate closely with founders and executives to align technology with business goals, then build
            systems that are reliable, secure, and ready for growth.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#e6ecea] bg-[#f4f6f5] p-5">
              <p className="text-2xl font-semibold text-[#00A859]">60+</p>
              <p className="text-sm text-[#4c6b5a]">Projects launched globally</p>
            </div>
            <div className="rounded-2xl border border-[#e6ecea] bg-[#f4f6f5] p-5">
              <p className="text-2xl font-semibold text-[#00A859]">4+ years</p>
              <p className="text-sm text-[#4c6b5a]">Delivery experience</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-[#e6ecea]"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
            alt="Team collaboration"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00A859]/25 via-transparent to-black/40" />
        </motion.div>
      </div>
      </div>
    </section>
  );
}
