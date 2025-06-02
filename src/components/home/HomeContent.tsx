"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  direction?: "left" | "right";
  className?: string;
  id?: string;
};

export default function HomeContent({
  title,
  description,
  image,
  imageAlt,
  className,
  id,
  direction = "left",
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col gap-4 py-4 sm:flex-row sm:gap-8 sm:px-8",
        direction === "left" && "sm:flex-row-reverse",
        className,
      )}
    >
      <motion.div className="flex flex-col items-center gap-4 py-4 text-center sm:flex-1 sm:items-start sm:justify-center sm:text-left">
        <h2 className="font-primary text-center text-xl uppercase lg:text-3xl">
          {title}
        </h2>
        <p className="text-sm sm:text-base">{description}</p>
      </motion.div>
      <motion.div className="flex flex-1 items-center justify-center">
        <img
          src={image.src}
          alt={imageAlt}
          className="h-auto mask-b-from-70% mask-b-to-100%"
        />
      </motion.div>
    </motion.section>
  );
}
