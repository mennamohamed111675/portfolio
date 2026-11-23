import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ProjectMock from "./ProjectMock";
import { fadeUp, viewport } from "../lib/motion";

function ProjectLinks({ project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {project.github !== "#" && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-gold/50"
        >
          <FaGithub />
          Code
        </a>
      )}
      {project.live !== "#" && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-rose px-4 py-2 text-sm text-ink transition hover:bg-rose/90"
        >
          <FaExternalLinkAlt />
          Live
        </a>
      )}
    </div>
  );
}

function DemoLogin({ project }) {
  const accounts = Array.isArray(project.demo) ? project.demo : project.demo ? [project.demo] : [];
  if (!accounts.length) return null;

  return (
    <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/5 px-4 py-3 text-sm text-zinc-300">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Demo login</p>
      <p className="mt-1 text-xs text-zinc-500">Use the username in the login field.</p>
      <ul className="mt-3 space-y-2">
        {accounts.map((account) => (
          <li key={account.username} className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
            <span className="min-w-[4.5rem] font-semibold text-white">{account.role}</span>
            <span>
              {account.username}
              <span className="text-zinc-500"> / {account.password}</span>
            </span>
            {account.email ? <span className="text-xs text-zinc-500">{account.email}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechPills({ tech }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-full border border-rose/20 bg-rose/10 px-3 py-1 text-xs text-rose"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project.id !== featured.id);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with presence"
          subtitle="Product-shaped interfaces — dashboards, living, and commerce — designed to feel real."
        />

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="glow-border glass mt-16 grid overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-2"
        >
          <div className="p-4 sm:p-6">
            <ProjectMock theme={featured.theme} />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Featured · {featured.year}
            </p>
            <h3 className="font-display mt-3 text-3xl font-bold">{featured.title}</h3>
            <p className="mt-4 leading-8 text-zinc-400">{featured.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-300">
              {featured.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-rose" />
                  {item}
                </li>
              ))}
            </ul>
            <TechPills tech={featured.tech} />
            <DemoLogin project={featured} />
            <ProjectLinks project={featured} />
          </div>
        </motion.article>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {rest.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: index * 0.1 }}
              className="glow-border glass overflow-hidden rounded-[2rem] border border-white/10"
            >
              <div className="p-4 sm:p-5">
                <ProjectMock theme={project.theme} />
              </div>
              <div className="px-8 pb-8">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  {project.role} · {project.year}
                </p>
                <h3 className="font-display mt-2 text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
                <TechPills tech={project.tech} />
                <DemoLogin project={project} />
                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
