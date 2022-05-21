export const pageVariants = (translateX) => {
  return {
    initial: {
      opacity: 0,
      x: `${translateX}vw`,
      sacle: 1.5,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: `${translateX}vw`,
      scale: 0.5,
    },
  };
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3,
};
