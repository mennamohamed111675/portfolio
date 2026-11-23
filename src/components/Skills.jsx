import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiVite, SiNextdotjs } from "react-icons/si";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewport } from "../lib/motion";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-violet-400" },
  { name: "Redux", icon: SiRedux, color: "text-violet-300" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Vite", icon: SiVite, color: "text-yellow-300" },
  { name: "Figma", icon: FaFigma, color: "text-pink-400" },
];

function Skills() {
  const marquee = [...skills, ...skills];

  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools I actually ship with"
          subtitle="A focused frontend stack — not a laundry list. Deep on React, sharp on UI."
        />
      </Container>

      <div className="relative mt-14 overflow-hidden border-y border-white/5 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="marquee-track flex w-max gap-4">
          {marquee.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5"
            >
              <skill.icon className={`text-lg ${skill.color}`} />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: index * 0.04 }}
              className="group glass rounded-3xl border border-white/10 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-rose/40"
            >
              <skill.icon
                className={`mx-auto text-4xl transition duration-300 group-hover:scale-110 ${skill.color}`}
              />
              <h3 className="mt-4 text-sm font-semibold sm:text-base">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
