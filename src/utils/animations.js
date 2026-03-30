export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const floatSlow = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const floatFast = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};
