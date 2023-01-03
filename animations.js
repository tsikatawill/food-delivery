export const sidebarAnim = {
  closed: {
    right: "-100%",
    transition: {
      ease: "easeIn",
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  open: {
    right: 0,
    transition: {
      ease: "easeIn",
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const sidebarItems = {
  closed: {
    translateX: 200,
    opacity: 0,
  },
  open: {
    opacity: 1,
    translateX: 0,
  },
};

export const popUp = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  transition: {
    ease: "easeIn",
  },
};

export const click = {
  initial: { scale: 1 },
  animate: { scale: 0.95 },
  transition: {
    duration: 0.05,
  },
};

export const slideX = (direction = "left", duration = 0.2) => {
  return {
    initial: { translateX: direction === "right" ? 50 : -50, opacity: 0 },
    animate: { translateX: 0, opacity: 1 },
    duration,
  };
};

export const slideY = (direction = "top", duration = 0.2) => {
  return {
    initial: { translateY: direction === "bottom" ? 50 : -50, opacity: 0 },
    animate: { translateY: 0, opacity: 1 },
    duration,
  };
};

export const headerTop = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: [1, 0.5, 0.71, 1],
    },
  },
};
