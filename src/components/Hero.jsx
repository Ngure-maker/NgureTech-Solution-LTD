import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { fadeUp, floatSlow, floatFast, stagger } from "../utils/animations";

const iconBase = "text-[#0a2016]/70 hover:text-[#0a2016] transition-colors";

export default function Hero({ onScrollTo }) {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#eef2f0]">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(0,168,89,0.9), rgba(0,88,45,0.75), rgba(7,12,12,0.9))",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0">
        {[
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        ].map((image, idx) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 4,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.5),transparent_45%),linear-gradient(90deg,rgba(0,0,0,0.55),rgba(0,0,0,0.1)_60%,transparent)]" />

      <header className="fixed left-0 right-0 top-0 z-20 border-b border-white/20 bg-white/65 px-6 py-4 text-lg font-semibold text-[#0a2016] shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/NgureTech%20Logo.png"
              alt="NgureTech Logo"
              className="h-12 w-auto max-w-[160px] rounded-md object-contain"
            />
            <span className="tracking-[0.2em]">NgureTech</span>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.25em] text-[#355447]">
            <button onClick={() => onScrollTo("about")} className="transition hover:text-[#00A859]">
              About
            </button>
            <button onClick={() => onScrollTo("services")} className="transition hover:text-[#00A859]">
              Services
            </button>
            <button onClick={() => onScrollTo("portfolio")} className="transition hover:text-[#00A859]">
              Portfolio
            </button>
            <button onClick={() => onScrollTo("contact")} className="transition hover:text-[#00A859]">
              Contact
            </button>
          </nav>
        </div>
      </header>

      <div className="relative z-10 flex min-h-screen flex-col gap-6 px-[28px] pb-8 pt-24">
        <div className="grid w-full items-center gap-6 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[1.6fr_0.7fr] xl:gap-16">
          <motion.div
            className="max-w-none rounded-3xl border border-white/25 bg-white/55 p-10 text-[#0a2016] shadow-[0_10px_28px_rgba(0,0,0,0.2)] backdrop-blur-lg sm:p-11 lg:col-span-2 lg:min-h-[660px] lg:p-14 xl:col-span-1 xl:min-h-[700px]"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00A859]/20 bg-[#00A859]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0a2016]"
          >
            Digital Innovation
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mb-6 font-display text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
          >
            NgureTech Solutions LTD – Digital Innovation Delivered
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mb-6 text-lg text-[#355447] sm:text-xl"
          >
            Building scalable tech solutions, modern websites, and custom software for businesses that want to grow.
          </motion.p>
          <motion.p variants={fadeUp} className="mb-6 text-base text-[#4c6b5a] sm:text-lg">
            We help founders and business leaders launch fast, modern experiences with measurable impact. From
            discovery to delivery, we focus on performance, brand clarity, and scalable systems that grow with you.
          </motion.p>
          <motion.p variants={fadeUp} className="mb-6 text-base text-[#4c6b5a] sm:text-lg">
            Expect crisp timelines, weekly progress updates, and designs that convert. We ship with accessibility,
            performance, and long-term maintainability in mind.
          </motion.p>
          <motion.p variants={fadeUp} className="mb-8 text-base text-[#4c6b5a] sm:text-lg">
            Our team stays hands-on from discovery to launch, with clear documentation and support that helps your
            internal teams move faster long after delivery.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button
              className="rounded-full bg-[#00A859] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-200/80 transition-all hover:-translate-y-0.5 hover:bg-[#01924f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859]"
              onClick={() => onScrollTo("contact")}
            >
              Get a Quote
            </button>
            <button
              className="rounded-full border border-[#00A859]/40 bg-[#00A859]/10 px-8 py-3.5 text-base font-semibold text-[#0a2016] transition-all hover:-translate-y-0.5 hover:border-[#00A859] hover:bg-[#00A859]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A859]"
              onClick={() => onScrollTo("portfolio")}
            >
              See Our Work
            </button>
          </motion.div>
          </motion.div>

          <div className="space-y-6 lg:col-span-2 lg:pt-2 xl:col-span-1 xl:ml-auto xl:max-w-md">
            <motion.div
              className="rounded-3xl border border-white/25 bg-white/55 p-8 text-[#0a2016] shadow-[0_10px_28px_rgba(0,0,0,0.2)] backdrop-blur-lg"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-[#355447]">
                Core Skills
              </motion.p>
              <motion.h3 variants={fadeUp} className="mt-3 text-lg font-semibold">
                What we do best
              </motion.h3>
              <motion.ul variants={fadeUp} className="mt-4 space-y-3 text-sm text-[#4c6b5a]">
                <li className="flex items-center justify-between rounded-2xl border border-[#e6ecea] bg-[#f4f6f5] px-4 py-3">
                  <span>Product Strategy</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#7b9c8a]">Roadmaps</span>
                </li>
                <li className="flex items-center justify-between rounded-2xl border border-[#e6ecea] bg-[#f4f6f5] px-4 py-3">
                  <span>Full-Stack Engineering</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#7b9c8a]">Web + API</span>
                </li>
                <li className="flex items-center justify-between rounded-2xl border border-[#e6ecea] bg-[#f4f6f5] px-4 py-3">
                  <span>Mobile Apps</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#7b9c8a]">iOS + Android</span>
                </li>
                <li className="flex items-center justify-between rounded-2xl border border-[#e6ecea] bg-[#f4f6f5] px-4 py-3">
                  <span>Brand & UI Systems</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#7b9c8a]">Design</span>
                </li>
                <li className="flex items-center justify-between rounded-2xl border border-[#e6ecea] bg-[#f4f6f5] px-4 py-3">
                  <span>Photography &amp; Videography</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#7b9c8a]">Events + Corporate</span>
                </li>
              </motion.ul>
            </motion.div>

            <motion.div className="flex flex-wrap items-center gap-4" variants={floatSlow} animate="animate">
              <a
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/55 text-[#0a2016] shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5 hover:bg-white/70"
                href="https://wa.me/254759920257"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/55 text-[#0a2016] shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5 hover:bg-white/70"
                href="mailto:hello@nguretech.com"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
              <motion.div className="flex items-center gap-6" variants={floatFast} animate="animate">
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/55 text-[#0a2016] shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5 hover:bg-white/70"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/55 text-[#0a2016] shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5 hover:bg-white/70"
                  href="https://www.instagram.com/nguretech "
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/55 text-[#0a2016] shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5 hover:bg-white/70"
                  href="https://x.com/NgureTech "
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="text-xl" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
