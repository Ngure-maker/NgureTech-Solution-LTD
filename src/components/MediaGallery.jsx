import { motion } from "framer-motion";
import { fadeUp, stagger } from "../utils/animations";

const photos = [
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
];

const videos = [
  { src: "/assets/1100102526.mp4", poster: "/assets/posters/1100102526.jpg" },
  { src: "/assets/1409289175.mp4", poster: "/assets/posters/1409289175.jpg" },
  { src: "/assets/-648919365.mp4", poster: "/assets/posters/-648919365.jpg" },
];

export default function MediaGallery() {
  return (
    <section id="media" className="relative overflow-hidden bg-transparent py-10">
      <div className="absolute inset-0">
        {["/assets/bg-3.jpg", "/assets/bg-1.jpg", "/assets/bg-4.jpg"].map((image, idx) => (
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
              Photography & Videography
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold text-[#0a2016] sm:text-4xl"
            >
              Visual samples
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold text-[#0a2016]">Photography</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {photos.map((src) => (
                  <motion.div
                    key={src}
                    className="overflow-hidden rounded-2xl border border-[#e6ecea] bg-[#f4f6f5]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                  >
                    <img src={src} alt="Photography sample" className="h-40 w-full object-cover" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-[#0a2016]">Videography</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {videos.map((video) => (
                  <motion.div
                    key={video.src}
                    className="overflow-hidden rounded-2xl border border-[#e6ecea] bg-[#f4f6f5]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                  >
                    <video
                      src={video.src}
                      poster={video.poster}
                      className="h-40 w-full object-cover"
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
