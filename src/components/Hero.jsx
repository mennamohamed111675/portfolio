import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import siteConfig from "../data/site";
import profileImg from "../assets/images/WhatsApp Image.jpeg";
import Container from "./Container";
import SocialLinks from "./SocialLinks";
import { fadeUp, stagger } from "../lib/motion";

const chips = ["React", "Tailwind", "JavaScript"];

function Hero() {
  const typeSequence = siteConfig.typewriterRoles.flatMap((role) => [role, 1800]);

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col justify-center overflow-x-clip pt-28 pb-16">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div variants={stagger} initial="hidden" animate="show" className="text-center lg:text-left">
            <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.34em] text-gold">
              {siteConfig.location}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display mt-4 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.75rem]"
            >
              {siteConfig.name.split(" ")[0]}
              <br />
              <span className="gradient-text">{siteConfig.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-6 h-10 text-xl font-medium text-gold sm:text-2xl">
              <TypeAnimation sequence={typeSequence} speed={46} repeat={Infinity} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg lg:mx-0"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="rounded-full bg-rose px-7 py-3.5 text-sm font-semibold text-ink transition duration-300 hover:bg-rose/90 hover:shadow-[0_0_32px_rgba(251,113,133,0.45)]"
              >
                View work
              </a>
              {siteConfig.cvUrl && (
                <a
                  href={siteConfig.cvUrl}
                  download
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold transition duration-300 hover:border-gold/50 hover:bg-white/10"
                >
                  Download CV
                </a>
              )}
              <a
                href="#contact"
                className="text-sm font-medium text-zinc-400 underline-offset-4 hover:text-white hover:underline"
              >
                Let&apos;s talk
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <SocialLinks className="mt-10 justify-center lg:justify-start" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="absolute inset-6 rounded-[2.2rem] bg-rose/25 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.1rem] p-[2px]">
              <div className="spin-slow pointer-events-none absolute inset-[-45%] bg-[conic-gradient(from_120deg,#fb7185,#e7c39a,#fda4af,#fb7185)] opacity-90" />
              <div className="relative overflow-hidden rounded-[2rem] bg-ink p-1.5">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.65rem]">
                  <img
                    src={profileImg}
                    alt={`${siteConfig.name}, Front-End Developer`}
                    className="h-full w-full origin-[50%_50%] scale-[2.05] object-cover object-[72%_8%]"
                  />
                </div>
                <div className="absolute inset-x-3 bottom-3 flex justify-center gap-2">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="mx-auto mt-16 hidden w-fit items-center gap-2 text-xs uppercase tracking-[0.28em] text-zinc-500 transition hover:text-white md:flex"
        >
          Scroll
          <FaArrowDown className="animate-bounce text-[10px]" />
        </a>
      </Container>
    </section>
  );
}

export default Hero;
