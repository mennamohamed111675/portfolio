import { motion } from "framer-motion";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewport } from "../lib/motion";

const timeline = [
  {
    year: "2026",
    title: "Frontend Developer Intern",
    company: "Codveda Technologies",
    description:
      "Shipped responsive React interfaces, tightened UI consistency, and practiced production frontend workflows.",
  },
  {
    year: "2025",
    title: "Frontend Development Diploma",
    company: "Route Academy",
    description:
      "Built real-world React and Next.js projects covering routing, APIs, state management, and responsive design systems.",
  },
  {
    year: "2022 — 2026",
    title: "Bachelor of Computers and Artificial Intelligence",
    company: "Helwan University",
    description:
      "Software engineering track — graduation project Smart School received an A grade.",
  },
];

function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="How I got here"
          subtitle="Training, internships, and a lot of late-night UI polishing."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-rose via-gold/40 to-transparent md:left-[15px]" />

          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: index * 0.12 }}
              className="relative mb-8 ml-10 md:ml-14"
            >
              <div className="absolute -left-[37px] top-7 h-3.5 w-3.5 rounded-full border-2 border-ink bg-rose shadow-[0_0_18px_rgba(251,113,133,0.8)] md:-left-[45px] md:h-4 md:w-4" />
              <div className="glow-border glass rounded-3xl border border-white/10 p-6 md:p-8">
                <span className="text-sm font-semibold text-gold">{item.year}</span>
                <h3 className="font-display mt-2 text-2xl font-bold">{item.title}</h3>
                <p className="mt-1 text-rose">{item.company}</p>
                <p className="mt-4 leading-8 text-zinc-400">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
