'use client'

import { motion, type MotionProps } from "framer-motion";

type Props = {
  children: React.ReactNode;
  animation: MotionProps;
};

export default function MotionWrapper({ children, animation }: Props) {
  return <motion.div {...animation}>{children}</motion.div>;
}