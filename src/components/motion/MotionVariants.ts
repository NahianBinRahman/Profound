import { Variants, Transition } from "framer-motion";

export const PREMIUM_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const defaultTransition: Transition = {
  duration: 0.65,
  ease: PREMIUM_EASE,
};

export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: customDelay,
      ease: PREMIUM_EASE,
    },
  }),
};

export const fadeInVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: PREMIUM_EASE,
    },
  }),
};

export const scaleInVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: PREMIUM_EASE,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: PREMIUM_EASE,
    },
  },
};

export const pageTransitionVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: PREMIUM_EASE,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};
