import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { fadeUp, stagger } from "../utils/animations";

export default function ContactForm() {
  return (
    <section id="contact" className="relative overflow-hidden bg-transparent py-10">
      <div className="absolute inset-0">
        {["/assets/bg-1.jpg", "/assets/bg-4.jpg", "/assets/bg-2.jpg"].map((image, idx) => (
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
        <div className="grid gap-8 rounded-3xl border border-[#e2e7e5] bg-white/65 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.2em] text-[#00A859]">
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-semibold text-[#0a2016] sm:text-4xl"
          >
            Let us build your next product
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-base text-[#4c6b5a]">
            Share your goals and we will respond with a tailored roadmap, timeline, and proposal.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#00A859]/40 bg-[#00A859]/10 px-4 py-2 text-sm font-semibold text-[#0a2016] transition-all hover:-translate-y-0.5 hover:border-[#00A859]"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <a
              href="mailto:hello@nguretech.com"
              className="flex items-center gap-2 rounded-full border border-[#00A859]/40 bg-white px-4 py-2 text-sm font-semibold text-[#0a2016] transition-all hover:-translate-y-0.5 hover:border-[#00A859]"
            >
              <FaEnvelope />
              hello@nguretech.com
            </a>
          </motion.div>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="rounded-3xl border border-[#e6ecea] bg-[#f4f6f5] p-6"
        >
          <motion.div variants={fadeUp} className="grid gap-5">
            <label className="text-sm font-semibold text-[#0a2016]">
              Name
              <input
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full rounded-2xl border border-[#d8f5e5] bg-white px-4 py-3 text-sm text-[#0a2016] outline-none transition focus:border-[#00A859] focus:ring-2 focus:ring-[#00A859]/20"
              />
            </label>
            <label className="text-sm font-semibold text-[#0a2016]">
              Email
              <input
                type="email"
                placeholder="you@email.com"
                className="mt-2 w-full rounded-2xl border border-[#d8f5e5] bg-white px-4 py-3 text-sm text-[#0a2016] outline-none transition focus:border-[#00A859] focus:ring-2 focus:ring-[#00A859]/20"
              />
            </label>
            <label className="text-sm font-semibold text-[#0a2016]">
              Message
              <textarea
                rows="5"
                placeholder="Tell us about your project"
                className="mt-2 w-full rounded-2xl border border-[#d8f5e5] bg-white px-4 py-3 text-sm text-[#0a2016] outline-none transition focus:border-[#00A859] focus:ring-2 focus:ring-[#00A859]/20"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-[#00A859] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/80 transition-all hover:-translate-y-0.5 hover:bg-[#01924f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859]"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
        </div>
      </div>
    </section>
  );
}
