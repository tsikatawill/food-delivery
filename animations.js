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
  closed: {
    scale: 0,
  },
  open: {
    scale: 1,
  },
  transition: {
    duration: 2,
  },
};
