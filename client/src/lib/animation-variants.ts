export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const slideIn = (direction: "left" | "right" | "up" | "down", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      y: direction === "up" ? -40 : direction === "down" ? 40 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay
      }
    }
  };
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const cardHoverVariants = {
  hover: {
    y: -8,
    boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3
    }
  }
};
