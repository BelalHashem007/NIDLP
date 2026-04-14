// animations.ts

export const fadeIn = (direction: "left" | "right" | "up" | "down", delay = 0) => {
  return {
    initial: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    whileInView: { 
      opacity: 1, 
      x: 0, 
      y: 0 
    },
    transition: { 
      duration: 0.3, 
      delay: delay // هنا بنربط الـ delay اللي جاي من الـ parameters
    },
    viewport: { once: true },
  };
};