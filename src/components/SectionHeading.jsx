import { motion } from "framer-motion";
import { fadeUp, viewport } from "../lib/motion";

function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`flex max-w-2xl flex-col ${alignment}`}
    >
      <span className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
