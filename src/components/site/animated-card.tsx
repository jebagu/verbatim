"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
}
