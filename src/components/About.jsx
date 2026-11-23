import { motion } from "framer-motion";
import { FaLaptopCode, FaLayerGroup, FaBolt } from "react-icons/fa";
import siteConfig from "../data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewport } from "../lib/motion";

const stats = [
  { icon: FaLayerGroup, value: "15+", label: "Projects shipped" },
  { icon: FaBolt, value: "10+", label: "Technologies" },
  { icon: FaLaptopCode, value: "2+", label: "Years learning" },
];

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="The person behind the pixels"
          subtitle="A Front-End developer from Cairo who treats UI like a craft — not a template."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="glow-border glass mx-auto mt-16 max-w-4xl rounded-[2rem] border border-white/10 p-8 md:p-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-gold">
            {siteConfig.role} · {siteConfig.location}
          </p>
          <h3 className="font-display mt-4 text-2xl font-bold md:text-4xl">
            {siteConfig.about.title}
          </h3>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            {siteConfig.about.description}
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {siteConfig.about.points.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-zinc-300"
              >
                <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-rose" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-3xl border border-white/10 p-6 text-center"
            >
              <stat.icon className="mx-auto text-xl text-rose" />
              <p className="font-display mt-3 text-3xl font-extrabold">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default About;
